import React, {Component} from 'react';

export default class MyEvent extends Component{	
	
	//constructorでバインドすれば一箇所にまとめられる.
	/*
	constructor(props){
		super(props);
		this.show = this.show.bind(this);
	}
	*/
	
	//クラスプロパティの公文を利用して、イベントハンドラーを定義. 
	show = (e) => {console.log(`${this.props.greet}, ${e.target.value}!!`);}
	
	/*
	show(e){
		//this を bindしないと this.props.greatでエラーになる.
		console.log(`${this.props.greet}, ${e.target.value}!!`);
	}
	*/
	render(){
		return (
			<form>
				<label htmlFor="txtName">名前：</label>
				{/*エベントハンドラーはonEvent属性で設定.エベントハンドラーにはイベントオブジェエクトが渡される（ここではe.ただし生のオブジェクト（nativeEent）ではなく、SyntheticEventである.）*/}
			{/*}<input id="txtName" type="text" onChange={this.show.bind(this)}/>*/}
			
				<input id="txtName" type="text" onChange={this.show}/>
				
				{/*または以下のようにアロー関数でも可能.*/}
				{/*<input id="txtName" type="text" onChange={(e)=>this.show(e)}/>*/}
			</form>
		);
	}
}