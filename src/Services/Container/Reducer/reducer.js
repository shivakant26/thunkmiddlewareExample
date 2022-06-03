const istate = {
    data:[]
}

const reducer = (state=istate ,action) =>{
    switch(action.type){
        case "GET_DATA":
            return{
                ...state,
                data:action.payload
            }
            break;
            default:
                return state;
    }
}

export default reducer;