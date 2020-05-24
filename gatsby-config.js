module.exports = {
  siteMetadata: {
    title: `Emily Netti Photography`,
    description: `Wedding website for Emily Netti Photography`,
    author: `@lukenetti`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `cormorant garamond\:300,600`,
          `montserrat\:400,600` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'emily-netti-photography'
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
