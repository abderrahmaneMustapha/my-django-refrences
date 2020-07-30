window.addEventListener("dragover",function(e){
    e = e 
    e.preventDefault();
  },false);
  window.addEventListener("drop",function(e){
    e = e 
    e.preventDefault();
  },false);


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