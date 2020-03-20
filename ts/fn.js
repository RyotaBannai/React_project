"use strict";
exports.__esModule = true;
// 他のtsファイルの読み込み
var fns = require("./functions");
var functions_1 = require("./functions");
// 関数の主な記法
// 1. function命令
// 2. 関数リテラル
// 3. アロー関数
// python の型宣言と「同じやん
function triangle(base, height) {
    return base * height / 2;
}
fns.clog(triangle(10, 5));
functions_1.test_export();
functions_1.test();
