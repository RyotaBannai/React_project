import React, {Component} from 'react';
import MyArticle from './MyArticle';

export default class MyWrapArticles extends Component{
	constructor(props){
		super(props)
    this.articles =[
  	{
  		id:0,
  		url: 'https://www.atmarkit.co.jp/ait/series/9383',
  		title: 'Angular TIPS',
  		description: '人気のJavaScript...',
  		isNew:true
  	},
  	{
  		id:1,
  		url: 'https://www.atmarkit.co.jp/ait/series/9383',
  		title: 'Angular TIPS',
  		description: '人気のJavaScript...',
  		isNew:true
  	}
  ];
  //classの外で aritcles　などを変数をfile scope のvariableとして宣言すればthis演算子は不要.
  this.list = this.articles.map((article)=>
		<MyArticle {...article} key={article.id}/>
	);
  }
  render(){
    return(
      <React.Fragment>{this.list}</React.Fragment>
    )
  }
}