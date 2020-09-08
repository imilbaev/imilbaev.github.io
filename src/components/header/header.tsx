import React from "react"
import { Link } from "gatsby"

import LogoImg from "../../images/logo.png"
import { Navigation } from "./navigation"
import "./Header.scss"

interface HeaderProps {
  author: string
  description: string
}

const Header: React.FC<HeaderProps> = ({ author, description }) => {
  return (
    <>
      <Link to="/" className="header__logo">
        <img src={LogoImg} alt="Logo" />
      </Link>

      <div className="header__content">
        <div>
          <Link to="/" className="header__name">
            {author}
          </Link>
          <div className="header__description">{description}</div>
        </div>

        <Navigation />
      </div>
    </>
  )
}

export default React.memo(Header)
