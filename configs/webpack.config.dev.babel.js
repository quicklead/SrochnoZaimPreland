import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default merge.smart(baseConfig, {
  devtool: 'cheap-module-source-map',

  mode: 'development',

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    })
  ]
});
