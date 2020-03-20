"use strict";
exports.__esModule = true;
var _ = require("lodash");
var data = "hoge";
data = "foo";
var data2 = 100;
data2 = 150;
var imany; // 初期値を省略.
imany = 100;
imany = "not error dude!!";
var data3 = undefined; // any type
var data4 = null; // any type
// TS 2.1 以降は　noImplicitAny Optionで
// 初めて代入された型がその方になる.
var mail = "admin@gmail.com;";
var msg = "we are now hiring engineer. \nif you're interested in, contact us via email: \n" + mail + ". we're all looking forward hearing from Yo!";
function show(result) {
    return "the result is " + result + ".";
}
function clog(input) {
    console.log(input);
}
//show(100); // error when compile to js
clog(show(100)); // string cast
clog(show("100")); // string cast
var array_data = ["java", "python", "go"];
var myarray = ["this ", "is ", "my", "fav"];
var multi_array = [
    //この書き方クソヤナ
    [1, 2],
    [3, 4]
];
var multi_array2 = [
    //こっちの方がまだマシ.
    [1, 2],
    [3, 4]
];
clog(myarray[0]);
clog(multi_array2[0]);
var omg1 = new Array(5); //size of 5
var omg2 = new Array(1, 2, 3); //size of 3
// let omg3: number[] = new Array(-5); // thus this is fucking error. but why the hell compling doesn't catch? lol
var ohyah = [];
var obj = {
    // インデックスシグネチャ：　何を定義しても構わない。例えば [key: string] とかでも可能.
    hoge: "oh",
    huga: "yah",
    bar: "mmm. yas"
};
clog(obj.hoge);
var obj2 = {
    ohh: "yah",
    man: "dude"
};
clog(obj2.ohh);
var obj3 = {
    one: 1,
    two: 2
};
// obj3.three = 3; // 後から宣言していない変数へアクセスしようとするとエラー
// プロパティ構文・ブラケット構文で要素にアクセスできる
var obj4 = {
    one: 1,
    two: 2
};
obj4.three = 3;
// インデックスシグネチャで宣言してあげれば、後から新しい変数へアクセスできる
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var m = Sex.MALE; //型をEnumにする
clog(m); // インデックスを取得（列挙子にはデフォルトで数値が割り振られる）
clog(Sex[m]); // Value（列挙子）を取得
var Sex2;
(function (Sex2) {
    Sex2[Sex2["MALE"] = 1] = "MALE";
    Sex2[Sex2["FEMALE"] = 2] = "FEMALE";
    Sex2[Sex2["UNKNOWN"] = 4] = "UNKNOWN";
})(Sex2 || (Sex2 = {}));
// Tuple: 複数の異なる型の集合を表現するためのデータ型
var diff_types_of_data = ["Ryota", 26, true];
if (diff_types_of_data[2]) {
    clog(diff_types_of_data[0]);
}
// Union 共用型
var union;
union = "hahah";
// union = 123; // here is an error
union = false;
var union_array = [
    "whatever you want",
    true,
    "yea haa",
    false
];
var whatever = ["aaa", 100, false];
var array_whatever = ["aaa", "aaa", "aaa"];
function getScene(s) {
    clog(s);
}
getScene("spring");
// getScene("sprin"); // error
// jquery を使ってみる
// $(function() {
//   $(".class").css("background-color", "Red");
// });
clog(_.toUpper("hello world!"));
