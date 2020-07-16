console.log('helloo there')
fetch('/paypal/client-id/')
    .then(response => response.json())
    .then(data => console.log(data))