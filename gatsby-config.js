module.exports = {
  siteMetadata: {
    title: `WPlus`,
    description: `Wallpapers for iOS devices`,
    author: `@mozart409`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: false
      }
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-148437297-1 `,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WPlus`,
        short_name: `WPlus`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/walls`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/walls/featured`
      }
    },

    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        purgeOnly: [`src/css/`]
      }
    },
    `gatsby-plugin-offline`
  ]
};
