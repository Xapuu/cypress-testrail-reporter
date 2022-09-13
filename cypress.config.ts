import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'C:/dev/cypress-testrail-reporter/dist/reporter/cypress-testrail-reporter.js'
});
