import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <h1>Recent articles</h1>

      {edges.map(edge => {
        const { frontmatter: post } = edge.node
        return (
          <div className="post-list__item" key={post.path}>
            <Link to={post.path}>{post.title}</Link>
            <span className="post-list__date">{post.date}</span>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
