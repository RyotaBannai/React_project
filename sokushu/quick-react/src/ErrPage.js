import React, {Component} from 'react';

export default class ErrPage extends Component{
	render(){
		return (<div>{`Couldn\'t find any page. You accessed to this url: ${window.location.href}`} </div> );
	}
}