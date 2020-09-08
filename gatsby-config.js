module.exports = {
  siteMetadata: {
    title: `Ramis Imilbaev - Front End Engineer`,
    description: `Front End Engineer`,
    author: `Ramis Imilbaev`,
    shorcut: `@imilbaev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ramis Imilbaev frontend engineer`,
        short_name: `Ramis Imilbaev`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157024017-1",
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        includePaths: [`${__dirname}/src/styles`],
      },
    },
  ],
}
