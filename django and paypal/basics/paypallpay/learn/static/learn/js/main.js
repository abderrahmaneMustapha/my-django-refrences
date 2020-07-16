function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
const csrftoken = getCookie('csrftoken');

        paypal.Buttons({

            // Call your server to set up the transaction
            createOrder: function(data, actions) {
                return fetch('/paypal/create/', {
                    method: 'post',
                    headers: {"X-CSRFToken": csrftoken}
                }).then(function(res) {
                    return res.json();
                }).then(function(orderData) {
                    return orderData.id;
                });
            },

            // Call your server to finalize the transaction
            onApprove: function(data, actions) {
                return fetch('/paypal/' + data.orderID + '/capture/'+course_id, {
                    method: 'post',
                    headers: {"X-CSRFToken": csrftoken}
                }).then(function(res) {
                    return res.json();
                }).then(function(orderData) {
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show a success / thank you message

                    // Your server defines the structure of 'orderData', which may differ
                    var errorDetail = Array.isArray(orderData.details) && orderData.details[0];

                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                        // Recoverable state, see: "Handle Funding Failures"
                        // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                        return actions.restart();
                    }

                    if (errorDetail) {
                        var msg = 'Sorry, your transaction could not be processed.';
                        if (errorDetail.description) msg += '\n\n' + errorDetail.description;
                        if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')';
                        // Show a failure message
                        return alert(msg);
                    }

                    // Show a success message to the buyer
                    alert('Transaction completed by ' + orderData.payer.name.given_name);
                });
            }


        }).render('#paypal-button-container');