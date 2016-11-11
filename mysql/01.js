var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodejs'
});
connection.connect();

connection.query('SELECT * FROM employees', function(err, rows, fields)
{
    if (err) throw err;

    console.log(rows[0]);
});

connection.end();