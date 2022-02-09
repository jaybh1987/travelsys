const {Pool, Client } = require('pg')


const pool = new Pool({
    user: 'postgres', 
    host: 'localhost', 
    datebase: 'travel', 
    password: 'postgres',
    port: 5432
})


module.exports = pool