module.exports = {
    siteMetadata: {
      name: `Roar! This is a Hungry Bear Studio Production!`,
      tagline: `Gatsby + SASS + Typescript`
    },  
    plugins: [
      `gatsby-plugin-sass`,
      `gatsby-plugin-typescript`,
      `gatsby-source-sanity`,
      {
        options: {
          projectId: 'your-project-id-here',
          dataset: 'your-dataset-here'
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Hungry-Bear-Studio-GatsbyJS`,
          short_name: `Hungry-Bear-Studio-GatsbyJS`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
          display: `standalone`,
          icon: `src/assets/images/bear-logo.png`, // This path is relative to the root of the site.
          include_favicon: true, // Include favicon
        },
      },
    ],
  }