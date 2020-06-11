### State Management Reference
- [今から始めるReact入門 シリーズ, Flux, Redux, MobX](https://qiita.com/TsutomuNakamura/items/f10491060f0f1640afd9)
### Docs Tips
### Router
- `exact`がない`<Route path="/archives" component={Archives}></Route>` はユーザが`/archives/foo`, `/archives/bar` とアクセスした場合にも表示されるコンポーネントになる。
- React Router によるコンポネントの参照は　`this.props.children`　で行う。Vueの`<router-view></router-view>`
- JSX ではclass では無く、`className` を使ってHTML のclass 属性を表すようになっている。classをそのまま使用したい場合は、`babel-plugin-react-html-attrs`　を使用する。`plugins: ['react-html-attrs']` をwebpackのoptionsに追加。
- 現在の react router だとデフォルトで搭載されているはずだが、前までのreact routerではブラウザの戻るボタンを押しても前に表示していたコンポネントに戻ることはできなかったので一手間必要。`onClick`のイベントハンドラで `this.props.history.push('url')`みたいにして追加する必要がある。
- 正規表現を使いたいときは `<Route path="/settings/:mode(main|extra)" component={Settings}></Route>`のようにして　`this.props.match.params.mode`　でアクセスする。
- `クエリストリングを取得`: 