import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const SingleTagTemplate = ({ pageContext }) => {
  const { posts, tagName } = pageContext
  return (
    <Layout>
      <h1>Posts about «{`${tagName}`}»</h1>
      <ul>
        {posts.map((post, index) => {
          const { path, title } = post.frontmatter
          return (
            <li key={index}>
              <Link to={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default SingleTagTemplate
