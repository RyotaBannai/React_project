import React from "react";
import '../../sass/Article.scss';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true,
            message: 'More Info'
        };
        this.contentRef = React.createRef();
    }
    toggleContent(){
        const node = this.contentRef.current; // get dom
        console.log(node);
        if(node.computedStyleMap().get('display').value === 'block')
            node.style.display = 'none';
        else
            node.style.display = 'block';

        this.toggleMessage();
    }
    toggleMessage(){
        if (this.state.message === 'More Info'){
            this.setState({
                message: 'Hide Info'
            })
        }
        else{
            this.setState({
                message: 'More Info'
            })
        }
    }
    render() {
        const { title, content, id } = this.props;
        return <div className="col-md-4">
            <h2>{title}</h2>
            <p ref={this.contentRef}>{content}</p>
            <button type='button' className='btn btn-light' onClick={this.toggleContent.bind(this)}>{this.state.message}</button>
            <a className="btn btn-default" href="#" >
                <button type='button' className='btn btn-info'>Jump to Article</button>
            </a>
            <button type='button' className='btn btn-danger' onClick={() => this.props.deleteArticle(id)}>Delete Article</button>
        </div>
    }
}