import React, { Component } from 'react'
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

import looking from './looking.svg'

class Post extends Component {

    constructor(props){

        super(props)
    }

    render () {
        let {data} = this.props
       
        if(!data || data.allSitePage.edges.length==0) return "-"

        
        let element = data.allSitePage.edges[0].node.context

        return (<Layout>
            <h2>{element.title}</h2>

            <div className="post-image-container">
                <img src={looking} />
                </div>

            <p className="post-content">{element.content}</p>
        </Layout>)
    }
}

export const query = graphql`
    query($path: String!){
        allSitePage(filter:{path:{eq:$path}}){
            edges{
                node{
                    context{
                        title
                        content
                        image
                    }
                    
                }
            }
        }
    }
`


export default Post