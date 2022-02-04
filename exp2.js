var express = require('express');
var router = express;

router.get('/hii', function(req, res){
   res.send('GET route on things.');
});
router.post('/hello', function(req, res){
   res.send('POST route on things.');
});
router.listen(3000);