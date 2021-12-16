var express = require('express');
var router = express.Router();
const { Pool, Clinet, Client } = require('pg')

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

  pool
  .query(getAll)
  .then(res => console.log(res.rows))
  .catch(e => console.error(e.stack))

  console.log('value of x = ', x)
  res.render('index', { title: 'Express' });
});

module.exports = router;
