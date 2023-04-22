const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'client/src/index.jsx'),

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {loader: "babel-loader",},
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        // type: 'asset/resource',
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            publicPath: 'images',
            emitFile: true,
            esModule: false
        }}]
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },

  plugins: [ new HtmlWebpackPlugin({
    title: 'Template',
    template: './client/src/index.html'
 })],

  mode: 'development'
};