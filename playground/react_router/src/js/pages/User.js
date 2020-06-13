import React, {Fragment} from "react";
import { connect } from "react-redux";
import actions from '../actions'
import axios from "axios";

@connect((store) => {
    return {
        fetched_user: store.fetched_user
    };
})
export default class User extends React.Component {
    componentDidMount() {
        this.props.dispatch((dispatch) => {
            axios.get("http://localhost:18081").then((response) => {
                dispatch(actions.fetch_user.getUser(response.data));
            }).catch((err) => {
                dispatch(actions.fetch_user.threwError(err));
            });
        });
    }
    render() {
        const { fetched_user } = this.props;
        return <><h1>User List</h1>
            { fetched_user ? fetched_user.map(user => <Show key={user.id} {...user}/> ): ''}
            </>
    }
}

class Show extends React.Component{
    render(){
        return <>
            <div>{this.props.id}</div>
            <div>{this.props.name}</div>
            <div>{this.props.age}</div>
        </>
    }
}