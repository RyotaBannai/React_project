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
