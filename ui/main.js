//Action to the button
var button = document.getElementById('counter');

button.onclick = function() {
  
//create  a request  object to the counter endpoint
var request = new XMLHttpRequest();

//capture the response and store it in a variable
request.onreadystatechange = function() {
  if (request.readyState === XMLHttpRequest.DONE){
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

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //create  a request  object to the counter endpoint
        var request = new XMLHttpRequest();

     //capture the response and store it in a variable
        request.onreadystatechange = function() {
           if (request.readyState === XMLHttpRequest.DONE){
      //take some action
      if (request.status === 200){
          //make a request to the server and send the name 
    //capture a list of names ans render it as a list 
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for (var i=0;i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
      }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
      }
           }
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
//make a request
request.open('GET','http://pranuthitallapally.imad.hasura-app.io/submit-name?name=' + name, true);
request.send(null);
};
