const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  }),
  addLessLoader(),
  addDecoratorsLegacy(),
  (config) => {
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    loaders[loaders.length - 3].use.push({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, 'src/styles/var.less')
      }
    })
    return config;
  }
);