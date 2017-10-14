var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
 
var articles = {
    'article-one' :{
                title  : 'Article One | Pranuthi',
                heading :  ' Article One ',
                date : ' Sep 2 ,2013 ',
                content : ` 
                          <p>
                            This is my first Article with less code , 
                            with html in server file 
                          </p>`
                 },
    'article-two' :{
               title  : 'Article Two | Pranuthi',
                heading :  ' Article Two ',
                date : ' Sep 10 ,2013 ',
                content : ` 
                          <p>
                            This is my second Article with less code , 
                            with html in server file 
                          </p>`
                    },               
    'article-three' : {
                title  : 'ArticleThree | Pranuthi',
                heading :  ' Article Three ',
                date : ' Sep 20 ,2013 ',
                content : ` 
                          <p>
                            This is my third Article with less code , 
                            with html in server file 
                          </p>`
                    }      
};
 


function createTemplate(data)  {
 var title = data.title;
 var heading = data.heading;
 var date = data.date;
 var content = data.content;
 var htmlTemplate = 
          
`<html>
    <head>
       <title>
            ${title} 
         </title>
      <meta name= "viewport" content = "width = device-width", initial-scale = 1" />
      <link href="/ui/style.css" rel="stylesheet" />
         
    </head>
  <body>
         <div class = "container"> 
              <a href = " / " > Home </a>
          </div>
         <hr/>
               ${heading}
            </h3>
          <div>
               ${date}
           </ div>
          <div>
              <p>
              ${content}
                </p>
             </div>
    </body>
</html>`;

return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function(req,res){
    var articleName = req.params.articleName ;
    res.send(createTemplate(articles[articleOne]));
});


app.get('/article-four', function(req,res){
    res.send('Article four is serving ');
});

app.get('/article-two', function(req,res){
    res.send('Article two is serving');
});

app.get('/article-three', function(req,res){
    res.send('Article three is serving');
});
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
