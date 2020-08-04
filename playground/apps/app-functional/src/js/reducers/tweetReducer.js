export default function reducer (state = [], action) {
    switch(action.type) {
        case "ADD_TWEET":
            state = state.concat({id: Date.now(), text: action.payload});
    }
    return state;
};