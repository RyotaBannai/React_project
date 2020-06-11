### State Management Reference
- [今から始めるReact入門 シリーズ, Flux, Redux, MobX](https://qiita.com/TsutomuNakamura/items/f10491060f0f1640afd9)
### Docs Tips
### Router
- `exact`がない`<Route path="/archives" component={Archives}></Route>` はユーザが`/archives/foo`, `/archives/bar` とアクセスした場合にも表示されるコンポーネントになる。
- React Router によるコンポネントの参照は　`this.props.children`　で行う。Vueの`<router-view></router-view>`
- JSX ではclass では無く、`className` を使ってHTML のclass 属性を表すようになっている。classをそのまま使用したい場合は、`babel-plugin-react-html-attrs`　を使用する。`plugins: ['react-html-attrs']` をwebpackのoptionsに追加。
- 現在の react router だとデフォルトで搭載されているはずだが、前までのreact routerではブラウザの戻るボタンを押しても前に表示していたコンポネントに戻ることはできなかったので一手間必要。`onClick`のイベントハンドラで `this.props.history.push('url')`みたいにして追加する必要がある。
- 正規表現を使いたいときは `<Route path="/settings/:mode(main|extra)" component={Settings}></Route>`のようにして　`this.props.match.params.mode`　でアクセスする。
- `クエリストリングを取得`: `this.props.location.search` で取得
- `NavLink`をbootstrap navbarに使えばjqeuryでactive classを操作する手間がなくなる。
- NavLink のrootが常にactiveにならないように exact をto activeClassNameの前につける。または property に`isActive={checkActive}`を追加して、以下のコードを追加. [参照](https://stackoverflow.com/questions/47879663/root-navlink-always-get-active-class-react-router-dom)
```javascript
const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === "/";
}
```
###
- setState() は state の更新を予約するだけで、すぐには state は更新しない。render() が呼ばれる前に更新後の値をすぐ使いたい場合は注意。
- Key : this._reactInternalFiber.key, Index : this._reactInternalFiber.index
- propsから使う関数は {()=> this.props.function()} みたいにする。this で使うときは {this.function}でok。
- propsから使う関数でchildのthisを使いたいときは、{this.props.function.bind(this)} みたいにすれば良い。
- 上記の方法でもtarget取れるが、`{(e)=> this.props.function(e)}` でイベントオブジェクトを渡してあげる方が良い。
- `特定のelement`を参照したい場合はrefを使う。以下のコードなら、this.contentRefでいつでもアクセス可能。
```javascript
constructor(){
    this.contentRef = React.createRef();
}
render() {
    return <p ref={this.contentRef}> {this.state.showContent ? content : null}</p>
}
```
- イベントのtargetはこうやってアクセス。
- 特定の要素のstyleを取得したい場合は　`computedStyleMap()`　を使う。
```javascript
// (test: you should use this rather than refs)   
eventHandler(event){
 const target = event.target; 
}
const node = this.contentRef.current; // get dom
if(node.computedStyleMap().get('display').value === 'block')
    node.style.display = 'none';
else
    node.style.display = 'block';
```
- Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state. You should pass state, props.
```javascript
// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
```
- A component may choose to pass its state down as props to its child components: This is commonly called a “`top-down`” or “`unidirectional`” data flow. 引数にはprops なのかstateなのか明示してあげるとわかりやすい。
- 親コンポネントメソッドを子に渡してあげれば、https://reactjs.org/docs/lifting-state-up.html　のようにstateをシンクさせる機能を実装できる。