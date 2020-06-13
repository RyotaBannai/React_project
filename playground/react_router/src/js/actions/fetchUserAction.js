export default {
    getUser : function(data){
        return {
            type: "RECEIVE_USERS",
            payload: data
        }
    },
    threwError: function(data){
        return {
            type: "FETCH_USERS_ERROR",
            payload: data
        }
    },
}
