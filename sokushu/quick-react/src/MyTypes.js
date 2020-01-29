import React, {Component} from 'react';
import PropTypes from 'prop-types';	

export class Member{}

class MyHello extends Component{
	render(){
		return (<p>結果はコンソールを確認.</p>);
	}
}
MyHello.propTypes = {
	prop1: PropTypes.instanceOf(Member),
}; 
export default MyHello;