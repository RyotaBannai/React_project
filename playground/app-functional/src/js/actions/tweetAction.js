export default {
    changeName: function (text) {
        return {
            type: "ADD_TWEET",
            payload: text
        };
    },
    threwError: function (){
        return {
            type: "ERR",
        };
    }
}