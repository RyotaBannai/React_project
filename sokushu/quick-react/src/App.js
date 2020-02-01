import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//ルーティング関連の機能をインポート
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
/*
  BrowserRouter: ブラウザーのhistory APIでルーティングを利用.
  HashRouter: ハッシュ形式でパスを管理.
  MemoeyRouter: メモリー上のみで履歴管理.
  NativeRouter: スマホ環境向け.
*/

//これまで作って、indexで直接読み込んで使っていたものを、まずはApp.jsで全て読み込む.
import MyTop from './MyTop';
import MyHello from './MyHello';
import MyWrapArticles from './MyWrapArticles';
import ErrPage from './ErrPage'

//　Class Component から継承（extends）してコンポーネントを作成。
/* 
	または、Function component(functoin <component_name>) 	でもコンポーネントの作成可能. 
	つまりこの場合、import React, {Component} from 'react';の 	個別メンバー Componentは不要。
	render method も必要ない。そのかわり(dom)をreturn。
*/

// コンポーネント名はPascal形式でhtmlタグを区別するため。

// コンポーネントをeditすると、webpack-dev-server が更新を認識して、自動でリロード＆反映する。

// style を追加する
const style = {color:'red', backgroundColor: 'yellow'};

/*
	パラメーターの引き渡し->　reactDom.render 	のときに入れる。コンポーネントで予め埋め込んでおく。
	
	複数の属性を列記することも可能。値も文字れつm数値m真偽地をはじめ	配列、関数など、任意のオブジェクトを指定できる。

*/

/*
	Parsing error: Only one default export allowed per module.
*/

function App(props) {
//const App = props =>{
  //<Swich>は上から順に評価し、最初に合致した要素「1つのみ」出力するための命令. 
  //exactは完全マッチ.もしexactを指定しなければ,
  //'/hello'は'/'にも一致するため,'/'以外のpathは表示されない.  //activeStyleの他に、activeClassName='now'のようにして、nowクラスを使ってstylingすることもできる.
  const current = {color:'red'}
  return (
    <Router>
      <div>
        <ul>
          <li><NavLink to="/" activeStyle={current} exact>Top</NavLink></li>
          <li><NavLink to="/hello" activeStyle={current}>Hello</NavLink></li>
          {/*ルートパラメータ付き.*/}
          <li><NavLink to="/article/13" activeStyle={current}>Published articles No.13</NavLink></li>
          <li><NavLink to="/article/108" activeStyle={current}>Published articles　No.108</NavLink></li>
          <li><NavLink to="/view" activeStyle={current}>View</NavLink></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={MyTop} />
          <Route exact path="/hello" component={MyHello} />
          <Route exact path="/article/:id" component={MyWrapArticles} />
          {/*component要素の代わりにrenderも使える.
           無名関数ではなく、アロー関数を使う.
            後ろに続く()は, タグ１つであれば、あってもなくてもいい.*/}
          <Route path='/view' render={()=> <div>This is created by render instead of component element.</div> } />
            
          <Route component={ErrPage}/>
        </Switch>
      </div>
    </Router>
    
  /*コメントはhtmlタグの中では"{/＊＊/}"こうする。空要素は〜/>で終える*/
  /*
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
			<h2 className="App-title" style={style}>
			{props.name}さん, Reactへようこそ！</h2>
			<ul>
				<li>今日は{props.today},</li>
				<li>天気は{props.weather}です。</li>
			</ul>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  */
  );
}

export default App;
