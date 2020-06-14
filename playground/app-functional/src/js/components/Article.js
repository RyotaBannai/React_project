import React from "react";
import '../../sass/Article.scss';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = { showContent: false };
    }
    toggleContent = event =>
        this.setState((state, props) => ({ showContent: !state.showContent,}));
    render() {
        const { title, content, id, deleteArticle } = this.props;
        return <div className="col-md-4">
            <h2>{title}</h2>
            <p> {this.state.showContent ? content : null}</p>
            <button type='button' className='btn btn-light' onClick={this.toggleContent.bind(this)}>
                {this.state.showContent ? 'Hide Info' : 'More Info'}</button>
            <a className="btn btn-default" href="#" >
                <button type='button' className='btn btn-info'>Jump to Article</button>
            </a>
            <button type='button' className='btn btn-danger' onClick={() => deleteArticle(id)}>Delete Article</button>
        </div>
    }
}