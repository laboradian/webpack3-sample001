const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin("[name].css");

module.exports = [
{
  /* ----------------
     JS用モジュール
    ----------------- */
  entry: {
    app: "./src/js/entry.js"
  },
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: '/js/',
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {}
        }
      }
    ]
  },
  plugins: [
    /* use jQuery as Global */
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['.js']
  }
},
{
  /* ----------------
     CSS用モジュール
    ----------------- */
  entry: {
    app: "./src/scss/entry.scss"
  },
  output: {
    path: path.resolve(__dirname, "public/css"),
    publicPath: '/css/',
    filename: "[name].css"
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    extractSass
  ],
  resolve: {
    // style-loader の中で、.jsファイルを拡張子なしで requireしているところがあるため、'.js'が必要
    extensions: ['.css', '.js']
  },
}
];
