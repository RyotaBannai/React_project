import React, {Component} from 'react';
import {Route, Link, Switch} from "react-router-dom";
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
    const id = this.props.match.params.id;
    const path = this.props.match.path;
    const url = this.props.match.url;
    //console.log(`url is: ${url}`) //>> /article/13
    //console.log(`path is: ${path}`) //>> /article/:id
    // /artigle/13/pages/1
    return(
      <React.Fragment>
      
      {this.selectedArticle()}
      <hr />
      [<Link to={`${url}/pages/1`}>1</Link>]
      [<Link to={`${url}/pages/2`}>2</Link>]
      <hr />
      <Switch>
        {/*親コンポーネントですでにpath="/article/:id/pages/:page"でここまでのpathを指定してるので、そのまま使用する.*/}
        <Route path={`${path}`} render={()=> <p>{`Page.${this.props.match.params.page}.This is the nested routing.`}</p> } />
        <Route render={()=> <p>No page any more.</p> } />
      </Switch>
        
      </React.Fragment>
    )
  }
}