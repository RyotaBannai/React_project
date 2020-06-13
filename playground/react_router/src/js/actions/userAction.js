import { createActions } from 'redux-actions';
const {  changeName, changeAge } = createActions('CHANGENAME', 'RECEIVEUSERS', 'FETCHERROR');
export default {
    changeName: changeName,
    changeAge: changeAge,
}