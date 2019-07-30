import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import _ from 'lodash'


const Image = ({originalName,className}) => (
  <StaticQuery
   

    query ={graphql`
      query {
        all:allFile{
          images:edges{
            node{
              childImageSharp{
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      }
    `}

    render={data => {


      
      
      let img = _.find(data.all.images,i=>_.get(i,"node.childImageSharp.fluid.originalName","") == originalName)


      if(img){
        return <Img  className={className} fluid={img.node.childImageSharp.fluid} />
      }else {
        return <span>not found!</span>
      }
    }}
  />
)
export default Image
