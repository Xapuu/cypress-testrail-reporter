"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypress_1 = require("cypress");
exports.default = (0, cypress_1.defineConfig)({
    e2e: {
        setupNodeEvents: function (on, config) {
            // implement node event listeners here
        },
    },
    reporter: 'C:/dev/cypress-testrail-reporter/dist/reporter/cypress-testrail-reporter.js'
});
//# sourceMappingURL=cypress.config.js.map