var express = require('express');
var router = express.Router();
const { Pool, Clinet, Client } = require('pg')
var _ = require('lodash')


// const credentials = {
//   user: "postgres", 
//   host: "localhost", 
//   database: "travel", 
//   password: "postgres", 
//   port: 5432
// }
// const pool = new Pool(credentials)
// const getAll = 'select * from students'; 

/* GET home page. */
router.get('/', function(req, res, next) { 

  res.send(JSON.stringify({"name": "amit"}))
  // res.render('index', { title: 'Express' });
});

module.exports = router;
