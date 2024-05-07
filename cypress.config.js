const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    env: {
      baseUrl:"https://pmsdevui.azurewebsites.net/",
   
    },
    pageLoadTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
   
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    return config;
    },
  },
});
