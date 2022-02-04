var express = require('express');
var app = express();

app.get('/123', function(req, res){
   res.send("Hello world!");
   console.log("somi");
});
// app.listen(3000);

app.listen(3000,function(){
    console.log("server started...");
});