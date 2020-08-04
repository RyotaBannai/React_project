import React, {Component} from 'react';
import PropTypes from 'prop-types';	

//export default class MyHello extends Component{	
class MyHello extends Component{
	render(){
		return (<div>Hello! {this.props.name}さん！</div>);
	}
}
// 型情報を宣言する.
// string は型名.
MyHello.propTypes = {
	name: PropTypes.string.isRequired
}; //Check out console for warnings when you don't pass the name property.

export default MyHello;

class MyHello2 extends Component{
	render(){
		return (<div>Hello! {this.props.children}さん！</div>);
	}
}
//export default MyHello2;