var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) { 

    let js = JSON.stringify({
        "name": "Jay", 
        "lastName": "Bhavsar"
    })

    res.send(js)
});
  
  module.exports = router;