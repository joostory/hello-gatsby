module.exports = {
  pathPrefix: '/hello-gatsby',
  siteMetadata: {
    title: 'Hello, Gatsby!',
    description: 'Gatsby로 만든 웹사이트',
    author: 'joostory'
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
    },
    'gatsby-plugin-react-helmet'
  ]
}
