import React, {Component} from 'react';

export default class MyState extends Component{	
	
	constructor(props){
		super(props)
		//初期化する.
		this.state = {
			current: new Date()
		};
		
		//一定のサイクルで更新
		setInterval(()=>{
			//引数を渡すことも可能. this.setState((prevState, props)=>({}))
			this.setState({
				current: new Date()
			});
		}, 1000);
	}
	
	render(){
		return (
			<div>現在の時刻は：
			{this.state.current.toLocaleString()}です.
			</div>
		);
	}
}