import { createActions } from 'redux-actions';
const {  changename, changeage } = createActions('CHANGENAME', 'CHANGEAGE');
export default {
    changeName: changename,
    changeAge: changeage,
}