import React from "react"
import { Link } from "gatsby"

export const Navigation = () => (
  <nav>
    <Link to="/" activeClassName="active">
      Home
    </Link>
    <Link to="/about" activeClassName="active">
      About
    </Link>
  </nav>
)
