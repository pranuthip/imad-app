//counter code 
var button = document.getElementById('counter');
 button.onClick = function(){
  //make a request to the counterendpoint
  var request = new XMLHttpRequest();
  
  //capture the response & store it in a variable
  request.onreadystatechange = function(){
   if (request.readyState === XMLHttpRequest.Done){
       //take some action
       if (request.status === 200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
       }
   }
//not yet done
   };
   request.open('GET','http://pranuthitallapally.imad.hasura.io/counter',true);
   request.send(null);
};
