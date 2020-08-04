import React, {Component} from 'react';

export default class MyState extends Component{	
	
	constructor(props){
		super(props);
		
		this.state = {
			data: 'child data',
		};
		
		//親コンポーネントのupdateメゾットを呼び出す.
		//このthis.stateのthisは子コンポーネントのthis
		
		//ここではコンストラクタで無条件にupdateメソッドを呼び出しているが、実用では子コンポーネントでdataを更新したところで、それを伝達するためにupdateメソッドを呼び出す、という流れになる.
		
		this.props.onUpdate(this.state);
		
		//親コンポーネントから onUpdate={this.update.bind(this)} で、
		//引き渡さないと親の関数は使えない. つまりonUpdateを呼び出すと、jsxが実行されて、
		//その内側の処理が実行される. イベントリスナーへのイベントオブジェクトは、
		//自分の(子コンポーネントの)stateを渡してあげれば良い.)
	}
	
	render(){
		return (
			<p>MyChild: {this.state.data}</p>
		);
	}
}