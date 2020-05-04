import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import LogoImg from "../../images/logo.png"
import { Navigation } from "./navigation"

const Header = ({ author, description }) => {
  return (
    <header>
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={LogoImg} alt="Logo" />
          </Link>
          <div>
            <Link to="/" className="_name">
              {author}
            </Link>
            <div className="_description">{description}</div>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default React.memo(Header)
