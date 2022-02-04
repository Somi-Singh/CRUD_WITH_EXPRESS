var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.put('/hey', function(req, res){
   res.send("Hey somi");
});
app.delete('/Hiiii', function(req, res){
   res.send("whats up");
});

app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3000);


app.all('/test', function(req, res){
    res.send("HTTP method doesn't have any effect on this route!");
 });
//  This method is generally used for defining middleware, which we'll discuss in the middleware chapter.