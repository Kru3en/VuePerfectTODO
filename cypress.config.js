const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "tests/e2e/fixtures",
  screenshotsFolder: "tests/e2e/screenshots",
  videosFolder: "tests/e2e/videos",
  e2e: {
    baseUrl: "http://localhost:8080",
    setupNodeEvents(on, config) {
      return require("./tests/e2e/plugins/index.js")(on, config);
    },
    specPattern: "tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}", // Обновлённый шаблон поиска тестов
    supportFile: "tests/e2e/support/index.js", // Укажите файл поддержки
  },
});
