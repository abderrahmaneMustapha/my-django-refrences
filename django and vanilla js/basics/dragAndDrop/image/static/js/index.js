window.addEventListener("dragover",function(e){
    e = e 
    e.preventDefault();
  },false);
  window.addEventListener("drop",function(e){
    e = e 
    e.preventDefault();
  },false);


  delete_el = (element, tag)=>{
    label = element.getElementsByTagName(tag)[0]
    if(label) {element.removeChild(label)}
    else{
        other = element.getElementsByClassName(tag)[0]
        if(other) element.removeChild(other)
    }
   
    
}



  handle_file = (element,file)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = function fileReadCompleted() {     
            delete_el(element,'label')
            delete_el(element,'droped-image')
            const img = new Image();          // creates an <img> element
            img.src = reader.result;         // loads the data URL as the image source
            img.className = "droped-image"
            element.appendChild(img);   // adds the image to the body        
        
    };
}


  file_inputs_drop  = document.getElementsByClassName('file-input')
  Array.prototype.forEach.call(file_inputs_drop, element=>{
      input=  element.getElementsByTagName('input')[0]
      element.addEventListener('drop', event=>{
          handle_file(element,event.dataTransfer.files[0])
          element.getElementsByTagName('input')[0].files = event.dataTransfer.files
  
          console.log(element.getElementsByTagName('input')[0].files)
      })
      
      /// get input inside this element
      input.addEventListener('change', event=>{
          handle_file(element,event.target.files[0],)
      })
  })



//////// THE AJAX PART ////////////////////

  ///////////// get cookie /////////////////
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}
var csrftoken = getCookie('csrftoken');
button = document.getElementsByTagName('button')[0]

  button.addEventListener('click', event=>{
    event.preventDefault()
    var xhttp = new XMLHttpRequest();
    formData = new FormData()
    formData.append('image', document.getElementById('id_image').files[0])

    xhttp.open("POST", '/', true);
    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
  
  
    xhttp.send(formData)
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText)
       
              console.log(data)
                              
        }
    }
  })