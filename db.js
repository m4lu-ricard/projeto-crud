const mysql = require('mysql2');

const db =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catolica',
    database: 'userdb',
    port: '3307'
});

db.connect(err =>{
    if(err) throw err;
    console.log('connectado ao banco de dados');
});

module.exports = db;