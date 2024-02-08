// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default

module.exports = (angularWebpackConfig, options) => {
  // angularWebpackConfig.output = {
  //   ...angularWebpackConfig.output,
  //   uniqueName: "ngmfe1",
  // };
  // angularWebpackConfig.optimization = { ...angularWebpackConfig.optimization, runtimeChunk: false };
  // angularWebpackConfig.plugins = [
  //   ...angularWebpackConfig.plugins,
  //   new ModuleFederationPlugin({
  //     shared: {
  //       "@angular/core": {
  //         singleton: true,
  //         strictVersion: true,
  //         requiredVersion: "^15.1.0",
  //       },
  //       "@angular/common": {
  //         singleton: true,
  //         strictVersion: true,
  //         requiredVersion: "^15.1.0",
  //       },
  //       "@angular/router": {
  //         singleton: true,
  //         strictVersion: true,
  //         requiredVersion: "^15.1.0",
  //       },
  //       "rxjs": {
  //         singleton: true,
  //         strictVersion: true,
  //         requiredVersion: "~7.8.0",
  //       },
  //       "single-spa-angular": {
  //         singleton: true,
  //         strictVersion: true,
  //         requiredVersion: "^8.0.1",
  //       },
  //     },
  //     name: "ngmfe1",
  //     filename: "remoteEntry.js",
  //     exposes: {
  //       "./MFEModule1": "./src/main.single-spa.ts",
  //     },
  //   }),
  // ];
  const singleSpaWebpackConfig = singleSpaAngularWebpack(angularWebpackConfig, options)

  return singleSpaWebpackConfig;
};