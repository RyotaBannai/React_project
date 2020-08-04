import React, {Component} from 'react';

import MyCover from './MyCover';

export default class MyBook extends Component {
	render(){
		return(
			<div>
				<MyCover isbn={this.props.info.isbn} title={this.props.info.title} />
				<ul>
					<li>書名: {this.props.info.title}</li>
					<li>価格: {this.props.info.price}円</li>
					<li>出版社: {this.props.info.published}</li>
				</ul>
			</div>
		);
	}
}