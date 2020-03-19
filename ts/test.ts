let data: string = "hoge";
data = "foo";

let data2 = 100;
data2 = 150;

let imany; // 初期値を省略.
imany = 100;
imany = "not error dude!!";

let data3 = undefined; // any type
let data4 = null; // any type

// TS 2.1 以降は　noImplicitAny Optionで
// 初めて代入された型がその方になる.
