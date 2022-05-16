var configuration = require('./config/configuration');

var shipitConfig = configuration.shipitConfig;

module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig(shipitConfig);

    shipit.blTask('compile_app', function () {
      if(shipit.config.isProduction) {
        shipit.remote('cd '+ shipit.releasePath + ' && npm run after-deploy && NODE_ENV=production npm run delete-pm2 && NODE_ENV=production npm run start-pm2');
      } else {
        shipit.remote('cd '+ shipit.releasePath + ' && npm run after-deploy && NODE_ENV=development npm run delete-pm2 && NODE_ENV=development npm run start-pm2');
      }
    });
    shipit.on('updated', function () {
        shipit.start('compile_app');
    });
}
