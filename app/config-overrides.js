const { override, fixBabelImports,addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
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
  addDecoratorsLegacy()
);