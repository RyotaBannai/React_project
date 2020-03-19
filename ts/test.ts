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

let mail: string = "admin@gmail.com;";
let msg = `we are now hiring engineer. 
if you're interested in, contact us via email: 
${mail}. we're all looking forward hearing from Yo!`;

function show(result: string) {
  return `the result is ${result}.`;
}
function clog(input: any) {
  console.log(input);
}
//show(100); // error when compile to js
clog(show(<any>100)); // string cast
clog(show("100" as any)); // string cast

let array_data: string[] = ["java", "python", "go"];
let myarray: Array<string> = ["this ", "is ", "my", "fav"];
let multi_array: Array<Array<number>> = [
  //この書き方クソヤナ
  [1, 2],
  [3, 4]
];
let multi_array2: number[][] = [
  //こっちの方がまだマシ.
  [1, 2],
  [3, 4]
];
clog(myarray[0]);
clog(multi_array2[0]);

let omg1: number[] = new Array(5); //size of 5
let omg2: number[] = new Array(1, 2, 3); //size of 3
// let omg3: number[] = new Array(-5); // thus this is fucking error. but why the hell compling doesn't catch? lol
let ohyah: number[] = [];

let obj: { [index: string]: string } = {
  // インデックスシグネチャ：　何を定義しても構わない。例えば [key: string] とかでも可能.
  hoge: "oh",
  huga: "yah",
  bar: "mmm. yas"
};
clog(obj.hoge);

interface StringMap {
  [key: string]: string;
}

let obj2: StringMap = {
  ohh: "yah",
  man: "dude"
};
clog(obj2.ohh);
