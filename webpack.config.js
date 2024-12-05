const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/register.html',
      filename: 'register.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/login.html',
      filename: 'login.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/dashboard.html',
      filename: 'dashboard.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gestion_livres.html',
      filename: 'gestion_livres.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gestion_utilisateurs.html',
      filename: 'gestion_utilisateurs.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/ajouter_livre.html',
      filename: 'ajouter_livre.html'
    })
  ],
};
