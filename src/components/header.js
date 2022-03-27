import React from "react"
import Logo from "../svgs/logo-text.svg"

import * as styles from "../styles/header.module.scss"

const Header = () => {
  const logoStyles = {
    fill: "#fff",
    width: "8em",
    padding: "0.5em",
  }

  return (
    <header className={styles.container}>
      <Logo style={logoStyles} />

      <nav className={styles.nav}>
        <a>About</a>
        <a>iGEM 2022</a>
        <a>Events</a>
        <a>Sponsors</a>
      </nav>
    </header>
  )
}

export default Header
