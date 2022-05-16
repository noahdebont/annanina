// final webpack found in /archetype-debug.log
require("@babel/polyfill");

module.exports = {
  entry: ["@babel/polyfill", "./app.jsx"],
  "module": {
    "rules": [
      {},
      {
        "loader": [
          {},
          {},
          {"options": {
              "modules": true
            }
          },
          {},
          {
            loader: "sass-loader"
          }
        ]
      },
      {},
      {},
      {
        test: /\.(eot|ttf|mp4|mov)(\?\S*)?$/i
      }
    ]
  },
  "plugins": [
    {},
    {},
    {},
    {
      "options": {
        "size": 4000,
        "imports": function() {
          return false;
        },
        "preserve": true,
        "defer": true
      }
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
      "definitions": {
        global: {}
      }
    }
  ]
}
