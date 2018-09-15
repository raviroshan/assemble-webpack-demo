const path = require('path');
const assembleWebpack = require('assemble-webpack');
const handlebarsHelpers = require('handlebars-helpers');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 9000,
    open: true
  },

  module: {
    rules: [
      {
        test: /\.(hbs)$/,
        use: [
          {
            loader: 'assemble-webpack'
          }
        ]
      }
    ]
  },
  plugins: [
    new assembleWebpack.AttachedPlugin({
      baseLayout: ['./src/app/layouts/**/*.hbs'],
      basePages: ['./src/app/pages/**/*.hbs'],
      partialsLayout: ['./src/app/fe-components/**/*.hbs'],
      partialsData: [
        './src/app/fe-components/**/*.json',
        './src/app/layouts/**/*.json',
        './src/app/pages/**/*.json'
      ],
      helpers: [handlebarsHelpers(), './src/app/helpers/custom-helpers.js']
    })
  ]
};
