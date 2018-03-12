/*
 ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// init HTML Webpack Plugin

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
 template: './public/index.html',
 inject: 'body'
});


const config = {
 entry: './src/js/index.js',
 output: {
  path: path.resolve('./public'),
  filename: 'bundle.js',
  publicPath: "/",
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
   },
   {
    test: /\.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/
   }, 
    {
        test: /\.scss$/,
        include: path.resolve('./sass'),
        loader: 'style!css!sass'
    },
    {
        test: /\.css$/,
        loader: "style-loader!css-loader"
    },
  ]
 },
 resolve: {
  extensions: ['.js', '.jsx']
 },
 devServer: {
    historyApiFallback: true,
  },
 plugins: [HtmlWebpackPluginConfig]
}
module.exports = config;
