var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
      browsers: ['Chrome'], //what browser we want test to run in
      singleRun: [true],
      frameworks: ['mocha'], //telling karma to use mocha framework -- descript and it functions
      files: ['app/tests/**/*.test.jsx'], //** = any file in the tests folder or any folders, *.test.jsx and anything that ends in .test.jsx
      preprocessors: {
          'app/tests/**/*.test.jsx' : ['webpack', 'sourcemap']
      }, //any of these files, we also want to run webpack & sourcemap
      reporters: ['mocha'], //reporters lets you know which tests pass and which tests fail using mocha (check boxes)
      client: {
          mocha: {
              timeout: '5000' //5 seconds
          }
      },//test time-out
      webpack: webpackConfig,
      webpackServer: {
          noInfo: true
      }
  });
};
