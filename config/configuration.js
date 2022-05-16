var global = {
  id: 'annanina_frontend',
  pageTitle: 'annanina',
  gitRepository: 'https://kbenrafik@bitbucket.org/coqtail/annanina-frontend.git',
  deployTo: '/data/annanina-frontend',
  appName: 'annanina_frontend',
  testing: {
    servers: 'cqtest02.coqtailbar.com',
    branch: 'testing',
    // key: 'deploy/deploykey-testing.pem',
    user: 'deploy',
    isProduction: false
  },
  production: {
    servers: '87.255.41.22',
    branch: 'master',
    // key: 'deploy/deploykey-production.pem',
    user: 'deploy',
    isProduction: true
  },
};

var shipitConfig = {
  default: {
    deployTo: global.deployTo,
    repositoryUrl: global.gitRepository,
  },
  testing: global.testing,
  production:  global.production,
  appName: global.appName,
};

module.exports = {
  global: global,
  shipitConfig: shipitConfig,
};
