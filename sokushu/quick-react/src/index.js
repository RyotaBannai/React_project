import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import MyHello from './MyHello';
//import MyBook from './MyBook';
import MyTypes, {Member} from './MyTypes';
import MyTypes2 from './MyTypes2';
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

const book = {
	isbn: 'WGS-JST-001',
	title: '速習',
	price: 454,
	published: 'WINGSプロジェクト'
};
/*
ReactDOM.render(
	//<MyTypes prop1={new Member()}/>, 
	<MyTypes />, //This causes error in console.
	document.getElementById('root'));
serviceWorker.unregister();
*/


//オブジェクトを渡して、PropTypes.shapeで型指定をする。
ReactDOM.render(
	//<MyTypes prop1={new Member()}/>, 
	<MyTypes2 />, //This causes error in console.
	document.getElementById('root'));
serviceWorker.unregister();


/*
ReactDOM.render(
	<MyHello />, document.getElementById('root'));
serviceWorker.unregister();
*/
//ReactDOM.render(<App name="Bannai"/>,
//ReactDOM.render(<App {...data}/>, document.getElementById('root'));
/*
ReactDOM.render(
	<MyHello2>
		<b>Childrenのテキスト！</b>
	</MyHello2>, document.getElementById('root'));
serviceWorker.unregister();
*/
/*
ReactDOM.render(
	<MyBook info={book} />, document.getElementById('root'));
*/
serviceWorker.unregister();
