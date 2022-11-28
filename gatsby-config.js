require("dotenv").config({
  path: ".env",
})

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "MIT iGEM",
    description: "",
    author: `@mit-igem`,
    siteUrl: `https://mit-igem.github.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.GATSBY_ADOBE_FONT_PROJECT_ID,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-F87615L72G"],
        gtagConfig: {
          anonymous_ip: true,
          cookie_expires: 0,
        },
      },
    },
  ],
}
