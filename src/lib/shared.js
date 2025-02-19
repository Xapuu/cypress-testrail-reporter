"use strict";
exports.__esModule = true;
exports.titleToCaseIds = void 0;
/**
 * Search for all applicable test cases
 * @param title
 * @returns {any}
 */
function titleToCaseIds(title) {
    var caseIds = [];
    var testCaseIdRegExp = /\bT?C(\d+)\b/g;
    var m;
    while ((m = testCaseIdRegExp.exec(title)) !== null) {
        var caseId = parseInt(m[1]);
        caseIds.push(caseId);
    }
    return caseIds;
}
exports.titleToCaseIds = titleToCaseIds;
