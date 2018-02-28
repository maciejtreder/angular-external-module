const { root } = require('./webpack/helpers');
const webpackMerge = require('webpack-merge');
const commonPartial = require('./webpack/webpack.common');
const clientPartial = require('./webpack/webpack.client');
const serverPartial = require('./webpack/webpack.server');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function (options, webpackOptions) {
  options = options || {};


    const clientConfig = webpackMerge({}, commonPartial, clientPartial, {
        plugins: [
            new AngularCompilerPlugin({
                tsConfigPath: root('./src/tsconfig.browser.json'),
                skipCodeGeneration: true
            })
        ]
    });
    const serverConfig = webpackMerge({}, commonPartial, serverPartial, {
        plugins: [
            new AngularCompilerPlugin({
                tsConfigPath: root('./src/tsconfig.server.json'),
                skipCodeGeneration: true
            })
        ]
    });

  const configs = [];
  configs.push(clientConfig, serverConfig);
  return configs;
}
