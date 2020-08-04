import React, {useEffect} from "react";
import { connect } from "react-redux";
import fetchUserActions from "../actions/fetchUserAction"
import axios from "axios";

const mapStateToProps = (state, props) => ({
    fetched_user: state.fetched_user
});
const mapDispatchToProps = (dispatch, props) => {
    const endpoint = "http://localhost:18081";
    return {
        fetcherUser: function () {
            dispatch(_dispatch =>
                axios
                    .get(endpoint).then((response) => dispatch(fetchUserActions.getUser(response.data)))
                    .catch((err) => dispatch(fetchUserActions.threwError(err)))
            )
        },
    };
};
const User = props => {
    useEffect(() => {
        props.fetcherUser();
        return () => { // clean up codes
        };
    }, []);
    const { fetched_user } = props;
    return (<>
            <h1>User List</h1>
            { fetched_user ? fetched_user.map(user => <Show key={user.id} {...user}/> ): ''}
            </>
    )
};
const Show = props => (
    <>
        <div>{props.id}</div>
        <div>{props.name}</div>
        <div>{props.age}</div>
    </>);
const user = connect(mapStateToProps, mapDispatchToProps)(User);
export {
    user as User
}