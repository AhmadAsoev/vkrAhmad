const mysql = require('@mysql/xdevapi');

const url = 'mysqlx://app:pass@localhost:33060/social';

const connection = mysql.getClient(url);

connection.getSession((error) => {
    if (error) {
        return console.log('Error into connect', error);
    } else {
        return console.log('Connect is success');
    }
})

module.exports = connection
