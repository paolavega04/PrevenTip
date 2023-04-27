const mysql = require('mysql2');

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

connection.connect((error) => {
    if (error) {
        console.error('Error de conexión',error);
        throw error;
    }
    console.log("Conexión exitosa.")
});



