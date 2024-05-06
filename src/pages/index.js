import * as React from "react"
import Layout from "../components/layout"
import "../styles/all.scss"
import SponsorMITBE from "../images/mit-be.png"
import SponsorMITChemE from "../images/mit-cheme.png"
import SponsorPlasmidsaurus from "../images/plasmidsaurus.png"
import SponsorAddgene from "../images/addgene.png"
import SponsorMITUROP from "../images/mit-urop.png"
import SponsorMITSofE from "../images/mit-sofe.png"
import SponsorCOOP from "../images/the-coop.png"

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
                  className={styles.nobold}
                  href="https://2022.igem.wiki/mit"
                  target="_blank"
                  rel="noreferrer"
                >
                  2022: GSHield, a smart glutathione patch to prevent oral
                  mucositis
                </a>
              </li>
              <li>
                <a
                  className={styles.nobold}
                  href="https://2023.igem.wiki/mit"
                  target="_blank"
                  rel="noreferrer"
                >
                  2023: CAR-P Diem, engineering macrophages to degrade IL-6, a
                  driver of cancer cachexia
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noreferrer">
                  2024: Targeting cancer metastasis
                </a>
              </li>
            </ul>
          </p>
        </section>

        <section className={styles.section}>
          <a name="igem2024"></a>
          <h1>iGEM 2024</h1>
          <p>
            This year, the students in MIT iGEM are tackling the greatest
            challenge in treating cancer: cancer metastasis.
          </p>

          <p>
            Follow our progress on{" "}
            <a
              className={styles.gradient}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/igem_mit"
            >
              Instagram
            </a>{" "}
            and{" "}
            <a
              className={styles.gradient}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/igem_mit"
            >
              X (Twitter)
            </a>
            .
          </p>
        </section>

        <section className={styles.section}>
          <a name="join-igem"></a>
          <h1>Join iGEM</h1>
          <p>
            If you want to learn synthetic biology, and want to be part of a
            student-driven project to tackle a problem you care about, you would
            be a good fit for MIT's iGEM student team!
          </p>

          <p>Applications for MIT iGEM 2025 will open in September 2024.</p>
        </section>

        <section className={styles.section}>
          <a name="events"></a>
          <h1>Upcoming events</h1>

          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showPrint=0&showCalendars=0&title=MIT%20iGEM%20Events&src=YjM5MWVkMzNkNDQ1MTY3MWZmY2ZjOGIzMWViZTZkNGVlMDc4NmZjOWEyZjcwMTYwNDY1NTAxYWJiYzBkMzU4MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23a79a00"
            style={{ "border-width": "0" }}
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          ></iframe>
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
          <a name="supporters"></a>
          <h1>Our supporters</h1>
          <p>
            MIT iGEM would not be possible without our supporters. We wish to
            express our sincerest gratitude for their generosity!
          </p>

          <p>
            <table className={styles.sponsorsTable}>
              <tr>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://be.mit.edu/"
                  >
                    <img src={SponsorMITBE} alt="MIT Biological Engineering" />
                  </a>
                </td>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://cheme.mit.edu/"
                  >
                    <img src={SponsorMITChemE} alt="MIT Chemical Engineering" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://engineering.mit.edu/"
                  >
                    <img src={SponsorMITSofE} alt="MIT School of Engineering" />
                  </a>
                </td>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://urop.mit.edu/"
                  >
                    <img src={SponsorMITUROP} alt="MIT UROP" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.plasmidsaurus.com/"
                  >
                    <img src={SponsorPlasmidsaurus} alt="Plasmidsaurus" />
                  </a>
                </td>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.addgene.org/"
                  >
                    <img src={SponsorAddgene} alt="Addgene" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>DeFlorez Endowment Fund</td>
                <td>Ralph L. Evans (1948) Endowment Fund</td>
              </tr>
              <tr>
                <td>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.thecoop.com/"
                  >
                    <img src={SponsorCOOP} alt="The COOP" />
                  </a>
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

export const Head = () => (
  <>
    <title>MIT iGEM &ndash; Synbio@MIT</title>
    <meta
      name="description"
      content="MIT's student-run synthetic biology research team."
    />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
  </>
)
