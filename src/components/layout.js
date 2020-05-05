import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header/header"
import "./normalize.css"
//import "./skeleton.css"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, author, description },
      },
    }) => (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header author={author} description={description} />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
