"use strict";
exports.__esModule = true;
// 他のtsファイルの読み込み
var fns = require("./functions"); // この方法でnamespaceを確保
var functions_1 = require("./functions");
// 関数の主な記法
// 1. function命令
// 2. 関数リテラル
// 3. アロー関数
// python の型宣言と「同じやん
function triangle(base, height) {
    return base * height / 2;
}
fns.clog2(triangle(10, 5));
functions_1.test_export();
functions_1.test();
// 関数リテラル 
// Python で言う lamnda関数のような感じ.
var lit_triangle = function (base, height) {
    return base * height / 2;
};
//ここまでするなら 
// アロー関数を使う
var lit_triangle2 = function (base, height) {
    return base * height / 2;
};
functions_1.clog(lit_triangle2(1, 1));
// アロー関数
var lit_triangle3 = function (base, height) {
    return base * height / 2;
};
// 本体が一文である場合は、中カッコは省略できる
var lit_triangle4 = function (base, height) { return base * height / 2; };
functions_1.clog(lit_triangle3(1, 1));
// アロー関数ではthis の退避が不要.
var Counter = function () {
    var _this = this;
    this.count = 0;
    setInterval(function () { _this.count++; }, 1000);
};
