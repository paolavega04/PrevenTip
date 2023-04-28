const mysql = require('mysql2');
const config = require('../config/config.json');

const pool = mysql.createPool({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database,
    connectionLimit:10,
    ssl: {
         rejectUnauthorized:false
    }
});

module.exports = pool.promise();
