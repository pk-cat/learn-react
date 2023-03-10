const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: __dirname + '/dist',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  devtool: "eval-cheap-source-map",
  // rules
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }], "@babel/preset-react"],
          },
        },
      },

      // handle image 
      {
        test: /\.png/,
        type: 'asset/resource'
      }
    ],
  },

  // plugins
  plugins: [new HtmlWebpackPlugin({
    template: "./public/index.html"
  })],
};
