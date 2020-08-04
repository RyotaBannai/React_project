import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MyNew from './MyNew';

export default class MyArticle extends Component{
  
  componentWillMount(){
		console.log('MyArticle component is Called');
  }
  
	//条件分岐用のコード
	renderIfNew(isNew){
		if(isNew) return <MyNew />
	}
	
	render(){
		return (
			<React.Fragment>
				<dt>
					<a href={this.props.url}>{this.props.title}</a>
					{/*関数そのまま組み込めないので、
					即時関数: (funciton(){})() または(()=>{})()*/}
					{/*
					{(()=>{
						if(this.props.isNew) return <MyNew />
					})()}
							
					*/}
					{/*
					三項演算子を使うとこうなる。
					{this.props.isNew ? <MyNew />: null}
					this.props.isNew &&  <MyNew /> でもok.
					*/}
						
					{/*関数で外に出した方が見やすい*/}
					{this.renderIfNew(this.props.isNew)}
				</dt>
				<dd>{this.props.description}{`No.${this.props.id}`}</dd>
			</React.Fragment>
		)
	}
}
