import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header/header"
import "./layout.scss"

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

export default Layout
