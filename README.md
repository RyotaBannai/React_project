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
### Redux
- `ActionCreator`のメソッドに入力内容が渡されて、`Actionのオブジェクト`を作成する
- Action：`typeプロパティ`を必ず持つ
- ActionCreator：`Actionを作るのみ`を行いStoreへのdispatchは行わない
- `Storeのインスタンスにdispatch(action)を行なう`事でStoreへ変更を伝えます(このdispatchはで行う)
- Store: アプリケーションの状態(state)を保持
    - stateへアクセスするためのgetState()を提供
    - stateを更新するためのdispatch(action)を提供
    - リスナーを登録するためのsubscribe(listener)を提供
- `dispatchされたaction`と、`state`を`Reducer`へ渡す（Store = state + Reducer）
- reducerはactionとstateから、新しいstateを作成して返すメソッド。ポイントは、`引数のstateを更新することはせず、新しいstateのオブジェクトを作成して返す`。
- Reducerの実装は、actionのtypeに応じて処理を書く
- Reducerはアプリケーションが大きくなるにつれて実装が肥大化してしまうので、`Reducer内に子Reducerを作成し、stateのプロパティごとに子Reducerで処理する`ようにする。
- Reducerが作成した新しいstateをstoreが保存
#### More technical staff
- `createStore` にはReducer とデータの初期値を渡す
```javascript
const reducer = () => {
  console.log("reducer has been called.");
}
const store = createStore(reducer, 1);
```
- Store が変更された時に呼ばれる`subscribe メソッド`とStore にAction を送信するdispatch メソッド
```javascript
store.subscribe(() => {
  console.log("store changed", store.getState());
});
store.dispatch({type: "INC"});
```
- dispatch をしてreducerが更新を行うと前の状態も更新してしまう：
> これは1 回目のuserReducer でreturn しているオブジェクトと2 回目のuserReducer でreturn しているオブジェクトが完全に同一のオブジェクトであるため、かつJavaScript の非同期性の特性からstore.subscribe 内にあるconsole.log が呼ばれる時点で、user とage が既に設定されてしまっている、完全に同じオブジェクトを出力してしまうわけです。そのため、1 回目のuserReducer と2 回目のuserReducer で完全に異なるオブジェクトを返してあげるようにすればこの問題は解決します。ではどのようにすれば、1 回目と2 回目で異なるオブジェクトを返せるようになるかと言うと、先程説明した`immutable なJavaScript が答え`になってきます。 Object に値を設定する時に`Object.assign` もしくはES6 の記法を使うのであれば{...state, name: action.payload}のような記法（`スプレッド構文`）を使ってやれば良い
- 二つ以上のreducerを使いたいときは、`combineReducers`を使う。複数の`dispatch` は`シーケンシャルに呼ばれる`
- `Redux middleware`: `reducer を呼ぶ前に処理を幾つか追加したい`時に使う。REST API で動いているバックエンドから、`reducer で処理するためのJSON データを取得`してきたり、`reducer の処理に入る前後にログを出力`したりといった処理

```javascript
const logger = (store) => (next) => (action) => {
  console.log("action fired", action);
}
// ↓　↓　↓
function logger(store) {
  return function (next) {    /* 無名関数 */
    return function (action) {    /* 無名関数 */
      console.log("action fired", action);
    }
  }
}
```
- `redux-thunk`: Redux のmiddleware で、`Action オブジェクトの代わりに関数を返す処理を呼び出す`ことができるようにするためのミドルウェア。thunk はstore のdispatch メソッドを受け取り、`Action オブジェクトの代わりに渡された非同期関数処理が完了した後に通常の同期処理アクションをディスパッチする`（つまりaxiosなどでjsonオブジェクトを取得してからその後にdispatchするようなことにも使える）ために利用される。
- `setState()` will always lead to a re-render `as long as an update is available` (`shouldComponentUpdate()`). 
### HOC vs Render Prop vs Hook
- `Higher Order Components` (or HOCs): components created to `wrap another component` and expand their logic with extra code. If that sounds familiar, that’s because it is `similar to decorator pattern` used extensively in Mobx. Many languages like Python have decorators in-built and JavaScript is going to support decorators soon. HOCs are very much like decorators.
```javascript
// HOC
const withDataProvider = (Wrapped, {firstName, lastName }) =>
  class Random extends React.Component {
    fullName = firstname + " " + lastName

    render = () => {
      return <Wrapped fullName={this.fullName} {...this.props}/>;
    }
  };

const ConsumingComp = props => <h1>Hello {props.fullName}</h1>;

const Comp = withDataProvider(ConsumingComp, {firstName: "First", lastName: "Last"});

<Comp />

// Render Props
const DataProvider = props => 
    props.children(props.firstName + " " + props.lastName)
 

const ConsumingComp = () => (
    <DataProvider firstName="First" lastName= "Last" render={fullName => (
        <h1>Hello {fullName}</h1>
    )}/>
)

// Hooks
const useDataProvider = (firstName, lastName) => {
    return firstName + " " + lastName
}

const ConsumingComp = () => {
    const fullName = useDataProvider("First", "Last")

    return <h1>Hello {fullName}</h1>
}
```
- [Reference - hoc renderprop hook](https://sophieau.com/article/hoc-renderprop-hook/)
- [Understanding React Render Props and HOC](https://blog.bitsrc.io/understanding-react-render-props-and-hoc-b37a9576e196)
- [Will React Classes Get Deprecated Because of Hooks?](https://blog.bitsrc.io/will-react-classes-get-deprecated-because-of-hooks-bb62938ac1f5)
- [React Context API — A Replacement for Redux?](https://blog.bitsrc.io/react-context-api-a-replacement-for-redux-6e20790492b3)
### Context API
- it lets you pass data through the component tree `without having to manually pass props at every level of the tree` even when not needed (prop drilling).
- the React team recommends using it to “share data that can be considered `“global”` for `a tree of React components`, such as the `current authenticated user`, `theme`, or `preferred language`”
#### Connect React and Redux
- `client.js`のrenderの一番外を`Provider`コンポネントでラップ
- `client.js とは別のコンポーネントでRedux を利用するにはconnect をimport して利用する`
- redux-actions [reference](https://github.com/larkintuckerllc/hello-redux-actions)
```javascript
//node server
node << EOF
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
  setTimeout(() => res.end('{"age": "30", "id": 0, "name": "foo", "age": 25, "id": 1, "name": "bar"}'), 1000);
}).listen(18081);
EOF
```