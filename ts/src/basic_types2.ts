// https://www.typescriptlang.org/docs/handbook/basic-types.html#a-note-about-let
// basics types on ts docs.
import { clog } from "./library/generic";
enum Color {
  Green, //0
  Red, //1
  Blue, //2
  Orange = 10
}
// if no number is not assied, then default value is index.
let c: Color = Color.Orange;
let d: string = Color[1]; // valueを取り出したい場合型はstring
clog(c);
clog(d);
