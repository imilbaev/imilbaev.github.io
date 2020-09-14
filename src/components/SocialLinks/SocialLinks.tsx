import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

import "./SocialLinks.scss"

const SocialLinks = () => (
  <div className="social-links">
    <Link className="social-links__link" to="https://linkedin.com/imilbaev">
      <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
    </Link>
    <Link className="social-links__link" to="http://github.com/imilbaev/">
      <FontAwesomeIcon icon={faStackOverflow} /> Github
    </Link>
    <Link
      className="social-links__link"
      to="https://stackoverflow.com/users/1037862/imilbaev"
    >
      <FontAwesomeIcon icon={faGithub} /> Stackoverflow
    </Link>
  </div>
)

export default SocialLinks
