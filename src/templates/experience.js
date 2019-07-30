import React, { Component } from 'react'

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"





class Experience extends Component {

    constructor(props){

        super(props)
    }

    render () {
        let {data} = this.props
       
        if(!data || data.allSitePage.edges.length==0) return "-"

        
        let element = data.allSitePage.edges[0].node.context

        return (<Layout>
            <h2>{element.title}</h2>
            <p>{element.description}</p>
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
                        description
                    }
                    
                }
            }
        }
    }
`


export default Experience