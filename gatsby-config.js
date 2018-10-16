module.exports = {
  siteMetadata: {
    title: 'Traveler',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: "ekybngipa1gr",
        accessToken: "af29b017f76aec6ff0aa56bcbf23d3663469aa5b16c587a8881f6b7674cc7259",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Travel Blog',
        short_name: 'Travel',
        start_url: '/', 
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
  ],
}
