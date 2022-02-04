const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
// here we did urlencoded and store data in json file.

var express = require('express');
var app = express();
app.get('/:id', ((req, res)=>{
   res.send('The id you specified is ' + req.params.id);
   console.log('The id you specified is ' + req.params.id)
}));
app.listen(3000);
// dynamic routes

var express = require('express');
var app = express();
app.get('/things/:name/:id', ((req, res)=>{
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
}));
app.listen(3000);
// here we put url as a routes 
