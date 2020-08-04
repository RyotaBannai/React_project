import React, {Component} from 'react';

export default class MyCover extends Component {
	render(){
		const url = `https://wings.msn.to/books/${this.props.isbn}/${this.props.isbn}.jpg`;
		return(
			 <img src={url} title={this.props.title}/>
		);
	}
}