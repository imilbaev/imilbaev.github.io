import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header/Header"
import "../styles/base.scss"
import "./Layout.scss"

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
      <div className="container">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header author={author} description={description} />
        <main className="main">{children}</main>
      </div>
    )}
  />
)

export default Layout
