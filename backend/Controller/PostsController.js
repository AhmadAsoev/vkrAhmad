'use strict'

const response = require('./../response')

exports.posts = (req, res) => {

    const posts = [
        {
            "id": 1,
            "title": "test",
            "author": {
                "name": "Ahmad",
                "avatar": "testAvatar.jpg" 
            },
            "content": "text content for test post in our web application",
            "like": 0,
            "byLiked": true,
            "created": "19 - september 2021"
        }
    ]

    response.status(posts, res)

}