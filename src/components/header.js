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
        <Link href="/ginkgo">Ginkgo RSVP form</Link>
        <a href="/#igem2023">iGEM 2023</a>
        <a href="/#events">Events</a>
        <a href="/#sponsors">Sponsors</a>
      </nav>
    </header>
  )
}

export default Header
