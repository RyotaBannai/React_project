import { clog } from "../library/generic";
// for loop, forEach, for in, for of
class Program {
  constructor(private _items: any) {}
  public main(): void {
    this.forloop();
  }
  forloop(): void {
    for (let i = 0; i < this._items.length; i++) {
      clog(this._items[i]);
    }
  }
}
let p = new Program([1, 2, 3, 4]);
p.main();
