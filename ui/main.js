
var button = document.getElementById('counter');
var counter = 0;
 button.onClick = function(){
  //make a request to the counterendpoint
  
  //capture the response & store it in a variable
  
  //Render the variable in correct span
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};
