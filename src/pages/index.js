import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../gstyle.css"
import _ from 'lodash'
import Profile from "../components/Profile";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Profile />

    <StaticQuery key="allSitePage" query={graphql`
    
      query{
        allSitePage{
          edges{
              node{
                  context{
                      type
                      title
                      path
                      year
                  }
              }
          }
        }
      }
    `}
      render={data => {
        //if no data just render /
        if (!data || data.allSitePage.edges.length == 0) return "/"

        let groups = _.groupBy(data.allSitePage.edges, edge => edge.node.context.type)

        let fields = _.filter(_.keys(groups), k => k != "null") //post,article,experince

        return fields.map(field => <ul className="my-ul">
          <li className={`li-title-${field}`}><b>{field}s</b></li>
          {

            (() => {

              switch (field) {
                case 'experience':
                  return groups[field].map((ed, k) =>
                    <li className={`li-${ed.node.context.type}`} key={k}><Link to={ed.node.context.path} ><h3>{ed.node.context.title}</h3></Link><span className="exp-year">{ed.node.context.year}</span></li>)
                default:
                  return groups[field].map((ed, k) =>
                    <li className={`li-${ed.node.context.type}`} key={k}><Link to={ed.node.context.path} ><h3>{ed.node.context.title}</h3></Link></li>)
              }
            })()

          }
        </ul>)

      }}
    />

  </Layout>
)




export default IndexPage
