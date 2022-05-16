

/*eslint-env es6*/
const plugin = {};

plugin.register = function (server, options, next) {
  server.route({
    method: "GET",
    path: '/public/{param*}',
    handler: {
        directory: {
            path: 'lib/client/public',
            redirectToSlash: true,
            index: true,
        }
    }
  });
  next();
};

plugin.register.attributes = {
  name: "PUBLICFOLDERPlugin",
  version: "0.0.1"
};

module.exports = plugin;
