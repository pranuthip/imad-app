//Action to the button
var button = document.getElementById('counter');

button.onclick = function() {
  
//create  a request  object to the counter endpoint
var request = new XMLHttpRequest();

//capture the response and store it in a variable
request.onreadystatechange = function() {
  if (request.readystate === XMLHttpRequest.DONE){
      //take some action
      if (request.status === 200){
          var counter = request.responseText;
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
      }
  }  
  //not yet done
};
//make a request
request.open('GET','http://pranuthitallapally.imad.hasura-app.io/counter', true);
request.send(null);
};