import React, {Component} from 'react';

export default class MyState extends Component{	
	
	constructor(props){
		super(props)
		//初期化する.
		this.state = {
			current: new Date()
		};
	}
  componentDidMount(){
		//一定のサイクルで更新
    //タイマーに関するコードをconstructor からdomが作られたときに呼び出されるcomponentDidMountに書く.
		this.timer= setInterval(()=>{
			//引数を渡すことも可能. this.setState((prevState, props)=>({}))
			this.setState({
				current: new Date()
			});
		}, 1000);
  }
  
  //componentを破棄するときにタイマーも破棄.
  componentWillUnmount(){
    clearInterval(this.timer);
  }
	
	render(){
		return (
			<div>現在の時刻は：
			{this.state.current.toLocaleString()}です.
			</div>
		);
	}
}