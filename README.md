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
