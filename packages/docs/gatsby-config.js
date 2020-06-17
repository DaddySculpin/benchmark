const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  pathPrefix: isProd ? '/benchmark' : '/',
  siteMetadata: {
    author: 'Benchmark Design System Team',
    title: 'Benchmark Design System',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-react-docgen',
      options: {
        babelrcRoots: ['../benchmark/*'],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/docs/`,
        name: 'docs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: '../benchmark/src',
        name: 'benchmark',
      },
    },
    // page creator plugin is needed to create mdx pages from folders
    // other than the default of `/src/pages`
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/index.js`),
        },
      },
    },
  ],
};
