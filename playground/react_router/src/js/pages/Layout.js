import React from "react";
import { Link, NavLink, WithRouter } from "react-router-dom";

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>News.net</h1>
                {this.props.children}
                <NavLink to="/settings/main" class="btn btn-success" activeClassName="btn-danger">settings</NavLink>
                <Link to="/archives"><button class="btn btn-danger">archives</button></Link>
                <Link to="/archives/some-other-articles" class="btn btn-warning">archives (some other articles)</Link>
                <Link to="/settings?name=netflix"><button class="btn btn-success">settings</button></Link>
            </div>
      );
    }
}

