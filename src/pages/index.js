import * as React from "react"
import Layout from "../components/layout"
import "../styles/all.scss"

import * as styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <div className={styles.mainContainer}>
      <main>
        <section className={styles.hero}>
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
        </section>

        <section className={styles.section}>
          <h1>About us</h1>
          <p>
            iGEM (“International Genetically Engineered Machine”) is a worldwide
            synthetic biology competition aimed at promoting the safe and open
            development of engineered biology. iGEM started at MIT as an IAP
            (“Independent Activities Period”) course in January 2003 before
            becoming a competition in 2004 and growing to hundreds of teams in
            more than 40 countries globally today.
          </p>

          <p>
            As part of iGEM, student-led teams devise an independent research
            project.
          </p>

          <p>
            The MIT iGEM team consists of students from a wide range of
            departments and disciplines, including biology, bioengineering,
            electrical engineering and computer science, math, chemistry,
            mechanical engineering, architecture, and more. Since 2003, the MIT
            iGEM team has been supported by the MIT Synthetic Biology Center and
            Weiss Lab, and is currently operating out of the Huang-Hobbs
            BioMaker Space (HHBMS).
          </p>
        </section>

        <section className={styles.section}>
          <h1>iGEM 2022</h1>
        </section>

        <section className={styles.section}>
          <h1>Events</h1>
        </section>

        <section className={styles.section}>
          <h1>Sponsors</h1>
        </section>
      </main>
    </div>
  </Layout>
)

export default IndexPage
