import React, {Component} from 'react';
import MyChild from './MyChild';

export default class MyState extends Component{	
	
	constructor(props){
		super(props)
		
		this.state = {
			data: null,
		};
	}
	
	//自分のstateを更新.
	update(state){
		this.setState(state);
	}
	
	render(){
		return (
			<React.Fragment>
				<p> MyParent: {this.state.data}</p>
				<MyChild onUpdate={this.update.bind(this)}/>
			</React.Fragment>
		);
	}
}