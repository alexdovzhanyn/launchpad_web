const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: path.join(__dirname, '/bin/assets/stylesheets/index.css'), 
  allChunks: true,
  disable: process.env.NODE_ENV === "development"
})

module.exports = [
  {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
      path: path.join(__dirname, "/bin"),
      filename: 'app.bundle.js'
    },
    module: {
      loaders: [
        { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [HtmlWebpackPluginConfig]
  },
  {
    entry: path.join(__dirname, '/src/assets/stylesheets/index.scss'),
    output: {
      path: path.join(__dirname, '/bin/assets/stylesheets'),
      filename: "index.css"
    },
    resolve: {
      modules: ["node_modules"]
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }]
    },
    plugins: [
      extractSass
    ]
  }
];