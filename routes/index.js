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


async function poolDemo() {
  const pool = new Pool(credentials)
  const now = await pool.query("select now();")
  await pool.end(); 

  return now
} 

async function clientDemo() {
  const client = new Client(credentials)

  await client.connect()
  const now = await client.query("select now();")

  await client.end(); 

  return now; 
}

/* GET home page. */
router.get('/', function(req, res, next) { 

  (async () => {
      const poolResult = await poolDemo(); 
      console.log("time with poool: "+ poolResult.rows[0]["now"])


      const clientResult = await clientDemo(); 
      console.log('Time with client '+ clientResult.rows[0]["now"])
  })()

  res.render('index', { title: 'Express' });
});

module.exports = router;
