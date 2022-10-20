const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    autoOpen : true,
  },
  e2e: {
    retries: {
      runMode: 1,
      openMode: 1,
      },
    setupNodeEvents(on, config) {
     require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
