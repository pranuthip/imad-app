console.log('Loaded!');

//To change the text
var element = document.getElementById('main-text');
element.innerHTML = "My new html content in main js file";

// To move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight ()  {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
  var interval = setInterval(moveRight,50);  
};

var button = document.getElementById('counter');
var counter = 0;

button.onClick = function(){
  //make a request to the counterendpoint
  //capture the response & store it in a variable
  //Render the variable in correct span
  
  counter = counter + 1;
  var span = document.getElementById('counter');
  span.innerHTML = counter.toString();
};