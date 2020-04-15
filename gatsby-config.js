module.exports = {
  siteMetadata: {
    title: 'Lets-code-the-web!',
    author: 'WC'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/` 
      }
    },
    'gatsby-transformer-remark'
  ]
}
