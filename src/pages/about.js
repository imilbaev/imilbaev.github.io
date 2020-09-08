import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>Hello there, my name is Ramis and I'm a software developer. </p>
    <p>
      <Link to="/blog-goals">Why I decided to start writing this blog?</Link>
    </p>
  </Layout>
)
