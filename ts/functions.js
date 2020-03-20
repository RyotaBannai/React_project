"use strict";
exports.__esModule = true;
function clog(input) {
    console.log(input);
}
exports.clog = clog;
function test_export() {
    console.log('this is just a test.');
}
exports.test_export = test_export;
function test_fn() {
    console.log('this is a fn as different name.');
}
exports.test = test_fn;
