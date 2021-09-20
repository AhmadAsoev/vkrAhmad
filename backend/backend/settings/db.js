const mysql = require('mysql')

const connection = mysql.createConnection({
     host: 'localhost',
     port: 33060,
     user: 'app',
     password: 'pass',
     database: 'social'
})

connection.connect((error) => {
    if (error) {
        return console.log('Error into connect');
    } else {
        return console.log('Connect is success');
    }
})

module.exports = connection
