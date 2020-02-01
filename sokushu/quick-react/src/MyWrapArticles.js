import React, {Component} from 'react';
import MyArticle from './MyArticle';

export default class MyWrapArticles extends Component{
	constructor(props){
		super(props)
    this.articles =[
  	{
  		id:13,
  		url: 'https://www.atmarkit.co.jp/ait/series/9383',
  		title: 'Angular TIPS',
  		description: '人気のJavaScript...',
  		isNew:true
  	},
  	{
  		id:108,
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
  }//end of constructor
  
  selectedArticle(){
    for(var i=0; i < this.articles.length; i++){
      /*
      console.log(`Prop id is: ${this.props.match.params.id}`);
      console.log(`Element id is: $
      {element.id}`);
      */
      /*
        this.props.
        -location
        -math.path
        -math.url
        -history等も使用できる.
      */
      if ( this.articles[i].id == this.props.match.params.id){
        //console.log('Ids match.');
        return <MyArticle {...this.articles[i]}/>;
      }
    }
  }
  
  render(){
    return(
      <React.Fragment>{this.selectedArticle()}</React.Fragment>
    )
  }
}