/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link, graphql } from "gatsby"


const WW = () => {
  

  return (
    
    <article
    className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
    >
      <h2>
      <Link to="/woodworking-showcase"> Woodworking Projects</Link>           
                    
      </h2>
      </article>
    
  )
}


export default WW
