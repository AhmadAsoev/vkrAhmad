'use strict'

module.exports = (app) => {
    const indexController = require('./../Controller/IndexController')
    const postsController = require('./../Controller/PostsController')
    const postRemoveController = require('./../Controller/PostsRemoveController')
    const postEditController = require('../Controller/PostsEditController')
    const postAddController = require('../Controller/PostsAddController')

    app.route('/').get(indexController.index)
    app.route('/posts').get(postsController.posts)
    app.route('/postID').delete(postRemoveController.remove)
    app.route('/postEdit').post(postEditController.edit)
    app.route('/postAdd').post(postAddController.add)
}