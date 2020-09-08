import React from "react"
import { Link } from "gatsby"

import "./Navigation.scss"

export const Navigation = () => (
  <nav className="navigation">
    <Link to="/" activeClassName="active">
      Home
    </Link>
    <Link to="/about" activeClassName="active">
      About
    </Link>
  </nav>
)
