//import mariadb from 'mariadb';
import mariadb from 'mysql2';

const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

export const pool = mariadb.createPool({
    host: host, 
    user: user,
    password: password,
    database: database,
    port: 3306
});    

pool.getConnection(function(err, connection) {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection lost');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('Database has too many connection');
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused');
        }
    }
    if(connection) connection.release();

    return;
});

export default pool;