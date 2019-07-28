/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const data = require('./data.json')

exports.createPages= ({actions}) => {


    const {createPage} = actions

    const component = path.resolve('src/templates/post.js')

    data.posts.forEach(element => {
        createPage({
            path:element.path,
            component,
            context:element
        })
    });

    



}