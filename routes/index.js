var express = require('express');
var router = express.Router();
const { Pool, Clinet, Client } = require('pg')
var _ = require('lodash')


const credentials = {
  user: "postgres", 
  host: "localhost", 
  database: "travel", 
  password: "postgres", 
  port: 5432
}


const pool = new Pool(credentials)

const getAll = 'select * from students'; 

/* GET home page. */
router.get('/', function(req, res, next) { 

  var d = ''

  console.log(_.chunk(['a', 'b', 'c', 'd'], 2)) 

  var r = pool
  .query(getAll)
  .then(res => {
    console.log(res)
    return res.rows
  })
  .catch(e => console.error(e.stack))
  
  console.log('r = ', r)
  res.send(r.rows.toString())
  // res.render('index', { title: 'Express' });
});

module.exports = router;
