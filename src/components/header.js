import React from "react"
import { Link } from "gatsby"
import Logo from "../svgs/logo-text.svg"

import * as styles from "../styles/header.module.scss"

const Header = () => {
  const logoStyles = {
    width: "8em",
    padding: "0.5em",
    shapeRendering: "geometricPrecision",
  }

  return (
    <header className={styles.container}>
      <Link to="/">
        <Logo style={logoStyles} />
      </Link>

      <nav className={styles.nav}>
        <a href="/#about">About</a>
        <a href="/#igem2024">iGEM 2024</a>
        <a href="/#join-igem">Join</a>
        <a href="/#events">Events</a>
        <a href="/#supporters">Supporters</a>
      </nav>
    </header>
  )
}

export default Header
