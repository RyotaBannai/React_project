import React from "react";
import '../../sass/Article.scss';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            message: 'More Info',
            showContent: false,
        };
        // this.contentRef = React.createRef();
    }
    toggleContent(event){
        //const target = event.target; // (test: you should use this rather than refs)
        // const node = this.contentRef.current; // get dom
        // if(node.computedStyleMap().get('display').value === 'block')
        //     node.style.display = 'none';
        // else
        //     node.style.display = 'block';

        this.setState({
           showContent: !this.state.showContent,
        });
        this.toggleMessage();
    }
    toggleMessage(){
        if (this.state.message === 'More Info')
            this.setState({ message: 'Hide Info',})
        else
            this.setState({message: 'More Info',})
    }
    render() {
        const { title, content, id, deleteArticle } = this.props;
        return <div className="col-md-4">
            <h2>{title}</h2>
            {/*<p ref={this.contentRef}> {this.state.showContent ? content : null}</p>*/}
            <p> {this.state.showContent ? content : null}</p>
            <button type='button' className='btn btn-light' onClick={this.toggleContent.bind(this)}>{this.state.message}</button>
            <a className="btn btn-default" href="#" >
                <button type='button' className='btn btn-info'>Jump to Article</button>
            </a>
            <button type='button' className='btn btn-danger' onClick={() => deleteArticle(id)}>Delete Article</button>
        </div>
    }
}