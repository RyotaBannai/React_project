// 他のtsファイルの読み込み
import fns = require('./functions');

// 関数の主な記法
// 1. function命令
// 2. 関数リテラル
// 3. アロー関数

// python の型宣言と「同じやん
function triangle(base: number, height: number): number{
  return base* height/ 2;
}
fns.clog(triangle(10,5))