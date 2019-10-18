import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default merge.smart(baseConfig, {
  devtool: 'source-map',

  mode: 'production',

  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|webp)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 90
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                speed: 11,
                quality: '90-100',
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  }
});
