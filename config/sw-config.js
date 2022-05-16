var configuration = require('./configuration');

var globalConfiguration = configuration.global;

module.exports = {
  cache: {
    cacheId: globalConfiguration.id,
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    logo: "./images/favicon-an.jpg",
    title: globalConfiguration.pageTitle,
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
