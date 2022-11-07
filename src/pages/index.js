import * as React from "react"
import Layout from "../components/layout"
import "../styles/all.scss"

import * as styles from "../styles/index.module.scss"

const Member = () => <div></div>

const Members = () => <div></div>

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
            <img src="/cancer-4x4-transparent.png" />
            <p>Detecting cancer in human tissues, LM.</p>
            <p>Aamir Ahmed, Jane Pendjiky and Michael Millar.</p>
            <p>Attribution 4.0 International (CC BY 4.0)</p>
          </div>
        </section>

        <section className={styles.section}>
          <a name="about"></a>
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
            In iGEM, student-led teams devise an independent research project in
            a iGEM track of their choosing, ranging from diagnostics to
            nutrition to manufacturing. The goal is identify a problem, devise
            gene circuits to address it, and demonstrate a proof of concept in
            the lab.
          </p>

          <p>
            The MIT iGEM team consists of students from a wide range of
            departments and disciplines, including biology, bioengineering,
            electrical engineering and computer science, math, chemistry,
            mechanical engineering, architecture, and more. Since 2003, the MIT
            iGEM team has been supported by the MIT Synthetic Biology Center and
            the{" "}
            <a
              href="https://weiss-lab.mit.edu/"
              target="_blank"
              rel="noreferer"
            >
              Weiss Lab
            </a>
            , and is currently operating out of the Huang-Hobbs BioMaker Space
            (HHBMS).
          </p>

          <p>
            MIT iGEM projects have focused on a wide range of topics. Below are
            the titles of projects previous years have worked on:
            <ul className={styles.pastProjects}>
              <li>2004: Synchronized chemotactic oscillators</li>
              <li>
                2005: Making bacteria produce proinsulin in response to glucose
              </li>
              <li>2006: Eau d'e coli - engineered scent systems in E. coli</li>
              <li>
                2007: Using surface display of polystyrene-binding proteins and
                heavy metal promoters to remove mercury from water
              </li>
              <li>2008: Drug delivery through yogurt</li>
              <li>2009: Localizing proteins with light</li>
              <li>2010: Programmable, self-constructing biomaterials</li>
              <li>2011: Mammalian cell patterning and tissues by design</li>
              <li>
                2012: Encoding genetic logic in small RNA-based logic gates
              </li>
              <li>
                2013: Synthetic cell-to-cell communication for synthetic tissues
              </li>
              <li>
                2014: Improving the diagnosis and treatment of Alzheimer's
                disease
              </li>
              <li>2015: Turning agricultural waste into biofuels</li>
              <li>2016: Diagnosing endometriosis</li>
              <li>
                2017: Using dCas13a to control alternative splicing in mammalian
                cells
              </li>
              <li>
                2018: Reducing cavities by circumventing biofilm formation
              </li>
              <li>
                2019: Directed migration of neutrophil-like cells through
                engineered chemokine secretion
              </li>
              <li>
                2020: Synthetic mammalian circuitry for graded treatment of
                COVID-19 cytokine storms
              </li>
              <li>2021: Probiotic treatment for Maple Syrup Urine Disease</li>
              <li>2022: GSHield, a smart patch to prevent oral mucositis</li>
            </ul>
          </p>
        </section>

        <section className={styles.section}>
          <a name="igem2022"></a>
          <h1>iGEM 2022</h1>
          <h2>Project</h2>
          <h2>Students</h2>
          <Members />
          <h2>Mentors</h2>
          <h2>Advisors</h2>
        </section>

        <section className={styles.section}>
          <a name="events"></a>
          <h1>Events</h1>
          <p>
            iGEM is more than just a project; we host events to develop MIT's
            synthetic biology community, particularly among undergraduates.
          </p>
          <h2>Journal Club</h2>
          <h2>Workshops</h2>
          <h2>Community Projects</h2>
          <p>
            We believe that the best way to learn is by doing. Because of the
            unique openness of the Huang-Hobbs BioMaker Space, we are able to
            host community projects through which students can experience the
            design-build-test-learn cycle.
          </p>
        </section>

        <section className={styles.section}>
          <a name="sponsors"></a>
          <h1>Sponsors</h1>
          <p>
            MIT iGEM would not be possible without our generous sponsors. We
            wish to express our sincerest gratitude for their support. Thank you
            again, sponsors!
          </p>
        </section>
      </main>
    </div>
  </Layout>
)

export default IndexPage
