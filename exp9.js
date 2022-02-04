var express = require('express');
var app = express();
//First middleware before response is sent
app.use(((req, res, next)=>{
   console.log("Start");
   next();
}));
//Route handler
app.get('/', ((req, res, next)=>{
   res.send("Middle");
   next();
}));
app.use('/',((req, res)=>{
   console.log('End');
}));
app.listen(3000);
// order of middleware calls


var bodyParser = require('body-parser');
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))
//To parse json data
app.use(bodyParser.json())
//here we use body-parser for handling incoming request boodies in a middleware.
var cookieParser = require('cookie-parser');
app.use(cookieParser())
// cookie-parser ,it attached to the client request object.
