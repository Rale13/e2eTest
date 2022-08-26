const { defineConfig } = require("cypress");

module.exports = defineConfig({

  chromeWebSecurity: false,
  watchForFileChanges: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
    env: {
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    FIRST_NAME: 'Rastko',
    LAST_NAME: 'Kostic',
    POSTAL_CODE: '21000'
    }
  },
});

