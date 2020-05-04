import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header/header"
import "./normalize.css"
import "./skeleton.css"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
    }) => (
      <>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header siteTitle={title} />
        <main>
          <div className="container">
            <div className="row">
              <div className="column">{children}</div>
            </div>
          </div>
        </main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
