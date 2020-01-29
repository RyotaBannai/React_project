import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyHello2 from './App';
import * as serviceWorker from './serviceWorker';

// <App />にhtmlで作ったdomを埋め込んでもok
// ただし、複数の要素は指定できない. <p>1</p><p>2</p>のように。
// または <React.Fragment></React.Fragment>で全要素を囲む
/*ReactDOM.render(
	<React.Fragment>
		<p>Hi</p>
		<p>,world!</p>
	</React.Fragment>, 
	document.getElementById('root'));\
*/

//jsx内では文字列はエスケープされる。 <p>dangerouslySetInnerHTML={{__html: str}}></p><p></p>でhtml tag 表示。

//一度にたくさんのパラメータを渡す。「...」演算子を利用
const data = {
	name: 'Bannai',
	today: Date(),
	weather: '晴',
};

//ReactDOM.render(<App name="Bannai"/>,
//ReactDOM.render(<App {...data}/>, document.getElementById('root'));
ReactDOM.render(
	<MyHello2>
		<b>Childrenのテキスト！</b>
		{/*Reactコンポーネント、タグもchildreとして利用できる。*/}
	</MyHello2>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
