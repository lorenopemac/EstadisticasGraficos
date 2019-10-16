import mysql from 'mysql';

import keys from './keys';

const pool =  mysql.createPool(keys.databaseProduccion);

pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.release();
    console.log('DB conectada');
})
export default pool;