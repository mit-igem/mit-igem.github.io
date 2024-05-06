import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/ginkgo.module.scss"
import GinkgoTalk from "../images/ginkgo-talk.png"

const GinkgoRSVPPage = () => (
  <Layout>
    <div className={styles.rsvp}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdgbtKAxXGeQqu-Xg5uuCPlygbOVc-0tqahg1OgTPWI2tT_bA/viewform?embedded=true"
        width="640"
        height="720"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>

      <img
        className={styles.poster}
        src={GinkgoTalk}
        alt="Ginkgo Bioworks talk January 24, 2023 in room 26-033 at 6PM."
      />
    </div>
  </Layout>
)

export default GinkgoRSVPPage

export const Head = () => (
  <>
    <title>RSVP for Ginkgo Bioworks | MIT iGEM</title>
    <meta
      name="description"
      content="MIT's student-run synthetic biology research team."
    />
    <link rel="shortcut icon" type="image/png" href="/logo.png" />
  </>
)
