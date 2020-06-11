import React from "react";

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
        this.contentRef = React.createRef();
    }
    toggleContent(){
        const node = this.contentRef.current; // get dom
        console.log(node);
        if(node.computedStyleMap().get('display').value === 'block')
            node.style.display = 'none'
        else
            node.style.display = 'block'
    }
    render() {
        const { title, content } = this.props;
        return <div className="col-md-4">
            <h2>{title}</h2>
            <p ref={this.contentRef}>{content}</p>
            <a className="btn btn-default" href="#" onClick={this.toggleContent.bind(this)}>More Info</a>
        </div>
    }
}