module.exports = {
  siteMetadata: {
    title: 'Scott O. Smith',
    description: 'My Personal Development Portfolio',
    author: 'Scott O. Smith',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-transition-link`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Scott O. Smith',
        short_name: 'SOS',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#ef8354',
        display: 'minimal-ui',
        icon: 'src/images/code.png',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:400,700']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
