module.exports = {
  siteMetadata: {
    title: `saphi`,
    description: `safi eddine bouhentala - web applications developer`,
    author: `@saphidev`,

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `saphidev portfolio`,
        short_name: `saphidev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/bug-icon.png`, // This path is relative to the root of the site.
      },
    },
   
  ],
}
