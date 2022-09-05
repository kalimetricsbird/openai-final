const {client, Client} = require('pg');

const client = new client({
    host: "localhost",
    port: 5000,
    user: "postgres",
    password: "12345",
    database: "supertoken_db"
})

client.connect();

client.query( "select * from supertoken_db_table", (err, result) => {
    if(!err) {
        console.log(result.rows);
    }
    client.end();

})