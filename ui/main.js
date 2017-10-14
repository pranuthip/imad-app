console.log('Loaded!');

//To change the text
var element = document.getElementById('main-text');
element.innerHTML = "My new html content in main js file";

// To move the image
var img = document.getElementById('madi');

img.onclick = function() {
    
  img.style.marginleft = '100px' ;  
};