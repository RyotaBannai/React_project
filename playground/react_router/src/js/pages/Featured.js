import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ArticlesInfo: [],
            Articles : [],
        };
        this.deleteArticle = this.deleteArticle.bind(this);
    }
    componentDidMount() {
        // document.title = `You clicked ${this.state.count} times`;
        let counter = new this.Counter();
        let Articles = [];
        const ArticlesInfo = [{
            key: counter.uuid,
            title: 'The Civil Rights Act of 2020',
            content: 'There are images of police officers joining protesters in dancing the Cupid shuffle, taking knees and hugging little girls.',
        }, {
            key: counter.uuid,
            title: 'Aggressive Tactics by National Guard, Ordered to Appease Trump, Wounded the Military, Too',
            content: 'Some members of the D.C. Guard — comprising more than 60 percent people of color — have not told family they were part of the crackdown.',

        }, {
            key: counter.uuid,
            title: 'Burundi’s outgoing president dies, possibly of covid-19',
            content: 'IN FOOTBALL, WROTE Jean-Paul Sartre, everything is complicated by the presence of the other team. Pierre Nkurunziza had ways of simplifying things.',

        }];

        for(const Props of ArticlesInfo){
            Articles.push(<Article {...Props} id={Props.key} deleteArticle={this.deleteArticle}/>)
        }

        this.setState({
            ArticlesInfo: ArticlesInfo,
            Articles: Articles
        });
    }
    es6Function = (value) => { // 2019 Update with react 16+ and ES6
        console.log(value)
    }
    deleteArticle(article_id) {
        console.log('wanna delete...');
        let new_article_list = this.state.ArticlesInfo.filter(article => article.key !== article_id);
        let articles = [];
        for(const Props of new_article_list){
            articles.push(<Article {...Props} id={Props.key} deleteArticle={this.deleteArticle}/>)
        }
        this.setState({
            ArticlesInfo: new_article_list,
            Articles: articles, // renderしてるやつを更新して上げないとreactiveにならない
        });
    }
    Counter (initial_count = 0) {
        let _uuid = initial_count;
        Object.defineProperty(this,"uuid", {
            get: function() { return ++_uuid; },
        })
    }
    // renderにいろいろかけなくも無いがdom の処理だけに限定する
    render() {
        return <div>
            <h1>Featured</h1>
            <div className="row">
                <div className="col-lg-12">
                    <div className="well text-center">
                        Ad spot goes here
                    </div>
                </div>
            </div>
            <div className="row">{this.state.Articles}</div>
        </div>
    }
}