var express = require('express'); 

var router = express.Router();


router.post('/', function(req, res, next) { 


    console.log('request body : ------------------> ', req.body)
    // let js = JSON.stringify({    
    //     "name": "Jay", 
    //     "lastName": "Bhavsar"
    // })

    res.send({'name':'jay'})
});
  
  module.exports = router;