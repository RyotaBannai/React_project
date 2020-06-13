export default {
    changeName: function (name) {
        return {
            type: "CHANGE_NAME",
            payload: name
        };
    },
    changeAge: function (age){
        return {
            type: "CHANGE_AGE",
            payload: age
        };
    }
}