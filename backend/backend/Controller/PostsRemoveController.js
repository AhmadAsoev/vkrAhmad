'use strict'

const response = require('./../response')
const db = require('./../settings/db')

exports.remove = (req, res) => {

    db.query(`DELETE FROM posts WHERE id = ${req.url.id}`, (error) => {
        if (error) {
            console.log(error);
        } else {
            response.status('Sucesseful')
        }
    })

}