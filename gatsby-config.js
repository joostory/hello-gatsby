module.exports = {
  pathPrefix: '/hello-gatsby',
  siteMetadata: {
    title: 'Hello, Gatsby!'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents`,
        name: `contents`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {

      }
    }
  ]
}
