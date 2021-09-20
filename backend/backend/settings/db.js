const mysql = require('mysql')

const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: 'кщще',
     database: 'posts'
})

connection.connect((error) => {
    if (error) {
        return console.log('Error into connect', error);
    } else {
        return console.log('Connect is success');
    }
})

module.exports = connection
