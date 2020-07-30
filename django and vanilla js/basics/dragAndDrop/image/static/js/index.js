window.addEventListener("dragover",function(e){
    e = e 
    e.preventDefault();
  },false);
  window.addEventListener("drop",function(e){
    e = e 
    e.preventDefault();
  },false);

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