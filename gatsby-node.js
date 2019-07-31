/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const data = require('./data.js')

exports.createPages= ({boundActionCreators}) => {

    const { createPage } = boundActionCreators;

    const componentPost = path.resolve('src/templates/post.js')
    const componentExperience = path.resolve('src/templates/experience.js')
    const componentArticle = path.resolve('src/templates/article.js')


    data.forEach(element => {

        switch(element.type){
            case 'post':
                    createPage({
                        path:element.path,
                        component:componentPost,
                        context:element
                    })
                    break;
            case 'experience':
                    createPage({
                        path:element.path,
                        component:componentExperience,
                        context:element
                    })
            break;
            case 'article':
                    createPage({
                        path:element.path,
                        component:componentArticle,
                        context:element
                    })
            break;

            default :
                    console.log("type unknwen")
        }


    });



}