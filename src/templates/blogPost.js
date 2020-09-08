import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layout"

const Template = ({ data, pageContext }) => {
  const {
    frontmatter: { title, date, tags },
    html,
  } = data.markdownRemark

  const { next, prev } = pageContext

  return (
    <Layout>
      <article className="article">
        <h1>{title}</h1>
        <div className="article__date">{date}</div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        {tags.length && (
          <ul className="article__tags">
            {tags.map((tag, index) => {
              return (
                <li key={index}>
                  <Link to={`/tags/${tag}`}>{tag}</Link>
                </li>
              )
            })}
          </ul>
        )}

        <div className="article__next-prev">
          {prev && (
            <Link to={prev.frontmatter.path}>
              {prev.frontmatter.title}&nbsp;»
            </Link>
          )}
          {next && (
            <Link to={next.frontmatter.path}>
              «&nbsp;{next.frontmatter.title}
            </Link>
          )}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        tags
      }
    }
  }
`

export default Template
