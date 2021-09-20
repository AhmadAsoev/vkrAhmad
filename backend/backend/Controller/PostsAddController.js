'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.add = (req, res) => {

    db.query(`INSERT INTO posts (content) VALUES(${req.body.content})`, (error) => {
        if (error) {
            console.log(error);
        } else {
            response.status('Successeful!', res)
        }
    })

}