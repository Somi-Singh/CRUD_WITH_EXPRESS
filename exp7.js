var express = require('express');
var app = express();
app.get('/things/:id([0-9]{5})',((req, res)=>{
   res.send('id: ' + req.params.id);
   console.log("id:"+req.params.id);
}));
app.listen(3000);
// here we use regex and we gave id limit 5.

querystring = require('querystring');  
const obj1=querystring.parse('name=Muskan&company=Google');  
console.log(obj1);  
// here we use querystring.parse method to convert string to object.

querystring = require('querystring');  
const qs1=querystring.stringify({name:'Muskan',company:'Google'});  
console.log(qs1);  
// here we use querystring.stringify method to convert object to string .