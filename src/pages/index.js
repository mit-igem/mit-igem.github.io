import * as React from "react"
import Layout from "../components/layout"
import "../styles/all.scss"

import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroText}>
              MIT's student-run <span>synthetic biology</span> research team.
            </h1>
          </div>

          <div className={styles.heroImageContainer}>
            <img src="/cancer-4x4.jpg" />
            <p>Detecting cancer in human tissues, LM.</p>
            <p>Aamir Ahmed, Jane Pendjiky and Michael Millar.</p>
            <p>Attribution 4.0 International (CC BY 4.0)</p>
          </div>
        </div>
      </main>
    </div>
  </Layout>
)

export default IndexPage
