var express = require("express")
var app = express()
// other routes
app.get("*",((req,res)=>{
    res.send("Sorry,this is an invalid URL");
    console.log("sorry this is wrong url")
}));
app.listen(3000);
// here we use more regexes to match/validate us routes.

var express = require('express');
var app = express();
//First middleware before response is sent
app.use(((req, res, next)=>{
   console.log("Start");
   next();
}));
//Route handler
app.get('/',((req, res, next)=>{
   res.send("Middle");
   next();
}));
app.use('/',((req, res)=>{
   console.log('End');
}));
app.listen(3000);
