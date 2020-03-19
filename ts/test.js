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
