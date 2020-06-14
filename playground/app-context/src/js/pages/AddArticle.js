import React from "react";

export default class AddArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'default'
        };
    }
    handleChange = event => this.setState({value: event.target.value});
    handleSubmit = event => { // 2019 Update with react 16+ and ES6
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    };
    render() {
        return <div>
            <h1>Write new article</h1>
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Email address</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp"
                               placeholder="Article Title" value={this.state.value} onChange={this.handleChange} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.
                            </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Example textarea</label>
                        <textarea className="form-control" id="content" rows="3" />
                    </div>
                    <div className="form-group">
                        <div >
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}