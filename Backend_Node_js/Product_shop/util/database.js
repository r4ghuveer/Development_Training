const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user:'root',
    database: 'world',
    password: 'raghuveer'
});
module.exports=pool.promise();