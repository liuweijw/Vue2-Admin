// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var apiBaseURL = 'http://47.106.144.24:1003'

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    port: 9527,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    host: '127.0.0.1',
    assetsPublicPath: '/',
    proxyTable: {
      // 采用网关的方式进行访问接口数据请打开下面注释，否则将采用mock的方式进行获取本地数据
      '/auth': {
        target: apiBaseURL,
        changeOrigin: true,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
      '/admin': {
        target: apiBaseURL,
        changeOrigin: true,
        pathRewrite: {
          '^/admin': '/admin'
        }
      }
      // ,
      // '/devadmin': {
      //   target: 'http://localhost:2012',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/devadmin': ''
      //   }
      // }
    },
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9527, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: false,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: '#cheap-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
