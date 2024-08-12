const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
});
