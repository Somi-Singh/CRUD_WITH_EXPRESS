var express = require('express')
var app = express()
var myLogger = ((req, res, next)=>{
  console.log('LOGGED')
  next()
})
app.use(myLogger)
app.get('/',((req, res)=>{
  res.send('Hello World!')
}))
app.listen(3000);
// simple middleware 

var express = require('express')
var app = express()
var requestTime = ((req, res, next)=>{
  req.requestTime = Date.now()
  next()
})
app.use(requestTime)
app.get('/',((req, res)=>{
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
  console.log(requestTime);
}))
app.listen(3000);
// this is second middleware

var express = require('express');
var app = express();
//Middleware function to log request protocol
app.use('/things',((req, res, next)=>{
   console.log("A request for things received at " + Date.now());
   next();
}));
// Route handler that sends the response
app.get('/things',((req, res)=>{
   res.send('Things');
}));
app.listen(3000);
