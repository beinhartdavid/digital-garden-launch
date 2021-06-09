import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <div>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRYzIq859F16YZD-U8SNOEPxCgJQ54r4eNWpB_A_3-n5I2co7dfsl361Qh2DalCd5E_MGaXYSCKcbkc/embed?start=false&loop=false&delayms=3000" frameborder="0" width="300" height="200" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
      
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
