const {Client} = require('pg')


const client = new Client({
    user: 'postgres', 
    host: 'localhost', 
    database: 'travel', 
    password: 'postgres', 
    port: 5432
})


console.log(client)

client.connect() 


module.exports = client