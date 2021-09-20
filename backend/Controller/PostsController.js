'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.posts = (req, res) => {

    db.query('SELECT * FROM posts;', (error, rows) => {
        if (error) {
            console.log(error);
        } else {
            response.status(rows, res)
        }
    })

}