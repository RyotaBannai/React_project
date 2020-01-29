import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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

//export default class MyHello extends Component{
class MyHello extends Component{
	render(){
		return (<div>Hello! {this.props.name}さん！</div>);
	}
}
//export default MyHello;

class MyHello2 extends Component{
	render(){
		return (<div>Hello! {this.props.children}さん！</div>);
	}
}
export default MyHello2;


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
				{/*コメントはこうする。空要素は〜/>で終える*/}
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
  );
}

//export default App;
