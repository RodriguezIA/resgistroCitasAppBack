import mysql from 'mysql';
import dbConfig from '../config/db.config';

//create a conection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//open the MYSQL connection
connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to the database.");
});

export default connection;