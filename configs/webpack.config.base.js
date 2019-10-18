import path from 'path';
import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, '..', 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-srcsets-loader',
            options: {
              interpolate: true,
              attrs: ['img:src', ':srcset']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          },
        ]
      },
      {
        test: /\.woff?/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          },
        ]
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: './public/assets',
      to: './',
    }]),

    new MiniCssExtractPlugin({
      filename: 'css/style.css',
      chunkFilename: '[id].css',
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ]
};
