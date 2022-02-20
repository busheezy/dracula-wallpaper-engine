import * as path from 'path';

import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as CopyPlugin from 'copy-webpack-plugin';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

const devServer: DevServerConfiguration = {
  allowedHosts: ['local.busheezy.dev'],
  port: 3000,
  compress: true,
  client: {
    webSocketURL: 'auto://0.0.0.0:0/ws',
  },
};

const config: Configuration = {
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
        use: ['css-loader'],
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'wallpaper-engine' }],
    }),
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer,
  devtool: process.env.NODE_ENV === 'production' ? false : 'eval-source-map',
};

export default config;
