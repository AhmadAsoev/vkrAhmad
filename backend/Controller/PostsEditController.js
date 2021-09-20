'use strict'

const response = require('../response')
const db = require('../settings/db')

exports.edit = (req, res) => {

    db.query(`UPDATE posts SET content = ${req.boby.post.content} where id = ${req.body.post.id}`, (error) => {
        if (error) {
            console.log(error);
        } else {
            response.status('Successefuly!', res)
        }
    })

}