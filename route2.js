// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res){
//    res.send('GET route on things.');
// });
// router.post('/', function(req, res){
//    res.send('POST route on things.');
// });

// //export this router to use in our index.js
// module.exports = router;




var express = require('Express');
var app = express();

var things = require('./things.js');

//both index.js and things.js should be in same directory
app.use('/things', things);

app.listen(3000);
