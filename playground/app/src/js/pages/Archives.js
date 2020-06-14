import React from "react";

export default class Archives extends React.Component {
    render() {
        // console.log(this.props); // access to url params
        return <h1>Archives ({this.props.match.params.article})</h1>
    }
}