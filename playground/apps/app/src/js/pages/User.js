import React, {Fragment} from "react";
import { connect } from "react-redux";
import fetchUserActions from "../actions/fetchUserAction"
import axios from "axios";

// storeが管理するstateを props として受け取るための変換函数
function mapStateToProps(state, props) {
    return {
        fetched_user: state.fetched_user
    };
}

// 各コンポーネントのイベントハンドラを一括で作成するものと思えば良い
function mapDispatchToProps(dispatch, props) {
    const endpoint = "http://localhost:18081";
    return {
        fetcherUser: function () {
            dispatch(_dispatch => axios
                .get(endpoint).then((response) => dispatch(fetchUserActions.getUser(response.data)))
                .catch((err) => dispatch(fetchUserActions.threwError(err)))
            )
        },
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class User extends React.Component {
    componentDidMount() {
        this.props.fetcherUser()
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