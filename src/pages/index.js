import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../gstyle.css"
import _ from 'lodash'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticQuery key="pp" query={graphql`
    
      query{
        allSitePage{
          edges{
              node{
                  context{
                      type
                      title
                      path
                  }
              }
          }
        }
      }
    `}
      render={data => {

        if (!data || data.allSitePage.edges.length == 0) return "/"

        let groups = _.groupBy(data.allSitePage.edges, edge => edge.node.context.type)

        let fields = _.filter(_.keys(groups), k => k!="null")


        return fields.map(field => <ul className="my-ul">
          <li className={`li-title-${field}`}><b>{field}</b></li>
          {
            groups[field].map((ed, k) => ed.node.context.title && <li className={`li-${ ed.node.context.type}`} key={k}><Link to={ ed.node.context.path} ><h3>{ ed.node.context.title}</h3></Link></li>)
          }
        </ul>)

      }}
    />



    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p> */}

  </Layout>
)




export default IndexPage
