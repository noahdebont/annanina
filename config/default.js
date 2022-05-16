var globalConfig = require('./configuration').global;

let defaultListenPort = 3031;

let indexHtml = './{{env.APP_SRC_DIR}}/server/views/index.html';

if (process.env.NODE_ENV == 'development') {
  indexHtml = './{{env.APP_SRC_DIR}}/server/views/index-development.html';
  defaultListenPort = '3049';
}

const portFromEnv = () => {
  const x = parseInt(process.env.PORT, 10);
  /* istanbul ignore next */
  return (x !== null && !isNaN(x)) ? x : defaultListenPort;
};

module.exports = {
  'plugins': {
    'inert': {
      'enable': true
    },
    'electrodeStaticPaths': {
      'enable': true,
      'options': {
        'pathPrefix': 'dist'
      }
    },
    'server/plugins/pwa': {
      'module': './{{env.APP_SRC_DIR}}/server/plugins/pwa'
    },
    'server/plugins/publicFolder': {
      'module': './{{env.APP_SRC_DIR}}/server/plugins/publicFolder'
    },
    'webapp': {
      'module': 'electrode-react-webapp/lib/hapi',
      'options': {
        'pageTitle': globalConfig.pageTitle,
        'htmlFile': indexHtml,
        'paths': {
          '/{args*}': {
            'content': {
              'module': './{{env.APP_SRC_DIR}}/server/views/index-view'
            }
          },
        },
        'serverSideRendering': false
      }
    }
  },
  'connections': {
    'default': {
      'host': process.env.HOST,
      'address': process.env.HOST_IP || '0.0.0.0',
      'port': portFromEnv(),
      'routes': {
        'cors': true
      },
      'state': {
        'ignoreErrors': true
      }
    }
  }
};
