import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import MyHello from './MyHello';
//import MyBook from './MyBook';
//import MyTypes, {Member} from './MyTypes';
//import MyTypes2 from './MyTypes2';
//import MyArticle from './MyArticle';
//import MyEvent from './MyEvent';
//import MyPool from './MyPool';
//import MyState from './MyState';
//import MyParent from './MyParent';
import MyForm from './MyForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<App />, document.getElementById('root'));

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

//「...」演算子：一度にたくさんのパラメータを、「展開して」渡す（「data」と指定せずに利用）。
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

const articles =[
	{
		id:0,
		url: 'https://www.atmarkit.co.jp/ait/series/9383',
		title: 'Angular TIPS',
		description: '人気のJavaScript...',
		isNew:true
	},
	{
		id:1,
		url: 'https://www.atmarkit.co.jp/ait/series/9383',
		title: 'Angular TIPS',
		description: '人気のJavaScript...',
		isNew:true
	}
];

//component に配列articlesをmapする. mapメゾット（コールバック関数）の戻り値を利用.
//componentを利用しない場合はReact.Fragmentにkeyを指定することもできる.
//テンプレートに直接埋め込んでもいいし、ロジックを変数として切り出してもいい.
/*
const list = articles.map((article)=>
		<MyArticle {...article} key={article.id}/>
	);
ReactDOM.render(
	<dl>{list}</dl>,
	document.getElementById('root')
);
*/

/*
ReactDOM.render(
	//<MyTypes prop1={new Member()}/>, 
	<MyTypes />, //This causes error in console.
	document.getElementById('root'));
*/

//オブジェクトを渡して、PropTypes.shapeで型指定をする。
/*ReactDOM.render(
	//<MyTypes prop1={new Member()}/>, 
	<MyTypes2 />, //This causes error in console.
	document.getElementById('root'));
*/

//ReactDOM.render(<App name="Bannai"/>,
//ReactDOM.render(<App {...data}/>, document.getElementById('root'));
/*
ReactDOM.render(
	<MyHello2>
		<b>Childrenのテキスト！</b>
	</MyHello2>, document.getElementById('root'));
*/

/*
ReactDOM.render(
	<MyBook info={book} />, document.getElementById('root'));
*/

/*
ReactDOM.render(
	<MyPool greet="Hello" />, 
	document.getElementById('root'));
*/
/*
ReactDOM.render(
		<MyState />, 
		document.getElementById('root'));
*/
/*
ReactDOM.render(
		<MyParent />, 
		document.getElementById('root'));
*/
/*
ReactDOM.render(
		<MyForm />, 
		document.getElementById('root'));	
*/
		
serviceWorker.unregister();
