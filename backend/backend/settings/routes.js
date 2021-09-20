'use strict'

module.exports = (app) => {
    const indexController = require('./../Controller/IndexController')
    const postsController = require('./../Controller/PostsController')
    // const postDelete = require('./../Controller/PostsDelete')

    app.route('/').get(indexController.index)
    app.route('/posts').get(postsController.posts)
    // app.route('/postID').delete(postDelete.delet)
    // app.route('/postEdit').post(postEdit.edit)
}