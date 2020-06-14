import React from "react";
import Article from "../components/Article";
import { AppContext } from "../context/AppContext"

class Featured extends React.Component {
    componentDidMount() {
        let context = this.context;
    }
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
            <div className="row">{this.context.articles.map(article =>
                <Article {...article} id={article.key} deleteArticle={this.context.deleteArticle}/>)}</div>
        </div>
    }
}
Featured.contextType = AppContext;
export default Featured;