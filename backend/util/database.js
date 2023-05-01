const mysql = require('mysql2');
const config = require('../config/config.json');

const connection = mysql.createConnection({
    host:"3.14.73.75",
    user:"monstruito",
    password:"montalvoinc",
    database:"proyecto_salud",
    connectionLimit:10,
    ssl: {
         rejectUnauthorized:false
    }
});

module.exports = connection.promise();
