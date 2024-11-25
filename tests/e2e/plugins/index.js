module.exports = (on, config) => {
  // Если нужен preprocessor, можно раскомментировать и настроить здесь
  // const webpack = require('@cypress/webpack-preprocessor');
  // on('file:preprocessor', webpack({
  //   webpackOptions: require('@vue/cli-service/webpack.config'),
  //   watchOptions: {}
  // }));

  // Вернём обновлённый объект конфигурации
  return Object.assign({}, config, {
    fixturesFolder: "tests/e2e/fixtures",
    screenshotsFolder: "tests/e2e/screenshots",
    videosFolder: "tests/e2e/videos",
    supportFile: "tests/e2e/support/index.js",
  });
};
