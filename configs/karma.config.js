const babelConfig = require('./babelrc.js');

module.exports = (config) => {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: '../test/tests.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '../test/tests.js': ['webpack'],
    },
    reporters: ['dots'],
    singleRun: true,
    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: babelConfig,
          },
          {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'null',
          },
          {
            test: /\.scss$/,
            loader: 'null',
          },
        ],
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true,
    },
    colors: true,
    logLevel: config.LOG_INFO,
  });
};
