import * as React from "react"
import Layout from "../components/layout"
import "../styles/all.scss"
import SponsorMITBE from "../images/mit-be.png"
import SponsorMITChemE from "../images/mit-cheme.png"
import SponsorPlasmidsaurus from "../images/plasmidsaurus.png"

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
              rel="noreferrer"
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
              <li>
                <a
                  className={styles.gradient}
                  href="https://2022.igem.wiki/mit"
                  target="_blank"
                  rel="noreferrer"
                >
                  2022: GSHield, a smart glutathione patch to prevent oral
                  mucositis
                </a>
              </li>
            </ul>
          </p>
        </section>

        <section className={styles.section}>
          <a name="igem2023"></a>
          <h1>iGEM 2023</h1>
          <p>
            If you want to learn synthetic biology, and want to be part of a
            student-driven project to tackle a problem you care about, you would
            be a good fit for MIT's iGEM 2023 student team!
          </p>

          <p>
            You can find more information about the MIT iGEM program by coming
            to the information session on{" "}
            <b>November 30, 2022 at 5PM in room 26-033 (the BioMaker Space)</b>{" "}
            and by viewing the{" "}
            <a
              className={styles.gradient}
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/presentation/d/1zW-HU0oy37JDy5lau1DIy9staPdsQjX3RjvM0j3UCeo/edit#slide=id.p"
            >
              info session slides linked here.
            </a>
          </p>
          <p>
            Applications for iGEM 2023 will open Thursday, December 1, 2022 and
            will remain open until Saturday, January 28, 2023 11:59PM.{" "}
            <a
              className={styles.gradient}
              target="_blank"
              rel="noreferrer"
              href="https://tinyurl.com/igem23app"
            >
              Click here to view the application.
            </a>
          </p>
        </section>

        {/* <section className={styles.section}>
          <a name="events"></a>
          <h1>Events</h1>
          <p>
            iGEM is more than just a research project; we also work on
            developing MIT's synthetic biology community, particularly among
            undergraduates.
          </p>
          <h2>Journal Club</h2>
          <h2>Workshops</h2>
          <p>
            We believe that the best way to learn is by doing. With the unique
            openness of the Huang-Hobbs BioMaker Space, we offer MIT community
            members the opportunity to explore synthetic biology. Our past
            workshops have included culturing muscle tissue (BioBots), bacterial
            photography, and an introduction to CRISPR.
          </p>
          <h2>Community Projects</h2>
          <p>
            we are able to host community projects through which students can
            experience the design-build-test-learn cycle.
          </p>
        </section> */}

        <section className={styles.section}>
          <a name="sponsors"></a>
          <h1>Sponsors</h1>
          <p>
            MIT iGEM would not be possible without our generous sponsors. We
            wish to express our sincerest gratitude for their support. Thank you
            again, sponsors!
          </p>

          <p>
            <table className={styles.sponsorsTable}>
              <tr>
                <td>
                  <img src={SponsorMITBE} alt="MIT Biological Engineering" />
                </td>
                <td>
                  <img src={SponsorMITChemE} alt="MIT Chemical Engineering" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={SponsorPlasmidsaurus} alt="Plasmidsaurus" />
                </td>
                <td></td>
              </tr>
            </table>
          </p>
        </section>
      </main>
    </div>
  </Layout>
)

export default IndexPage
