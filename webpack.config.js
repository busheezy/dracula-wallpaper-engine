const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  })],
  mode: process.env.NODE_ENV ?? 'development',
  devServer: {
    allowedHosts: [
      'local.busheezy.dev'
    ],
    port: 3000,
    compress: true,
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    }
  }
};