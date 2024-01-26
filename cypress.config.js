const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 60000,
    watchForFileChanges: true,
    //viewportWidth: 1280,
    //viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
