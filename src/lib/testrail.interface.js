"use strict";
exports.__esModule = true;
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Passed"] = 1] = "Passed";
    Status[Status["Blocked"] = 2] = "Blocked";
    Status[Status["Untested"] = 3] = "Untested";
    Status[Status["Retest"] = 4] = "Retest";
    Status[Status["Failed"] = 5] = "Failed";
})(Status = exports.Status || (exports.Status = {}));
