import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../gstyle.css"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticQuery key="pp" query={graphql`
    
      query{
        allSitePage{
          edges{
              node{
                  context{
                      title
                      path
                  }
              }
          }
        }
      }
    `}
    render={data=>{
      console.log("index data",data)
      if(data && data.allSitePage.edges.length!=0){

        return <ul className="my-ul">
          <li><b>AAA</b></li>
          {
            data.allSitePage.edges.map((ed,k)=>ed.node.context.title && <li key={k}><Link to={ed.node.context.path} >{ed.node.context.title}</Link></li>)
          }
        </ul>


      }else{
        return "/"
      }



    }}
    />



    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p> */}
   
  </Layout>
)




export default IndexPage
