export default function reducer (state = {}, action) {
    switch(action.type) {
        case "CHANGE_NAME":
            state = {...state, name: action.payload};
            break;
        case "CHANGE_AGE":
            state = {...state, age: action.payload};
            break;
        case "ERR":
            throw new Error("It's error!!!!");
    }
    return state;
};