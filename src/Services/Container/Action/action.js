
import axios from "axios";


export const get_Data = () => {
    return dispatch => {
        console.log("GetUsers dispatch");

        axios.get(`https://dummyjson.com/products`)
        .then(res => {
            const response = res.data;

            dispatch({
                type: "GET_DATA",
                payload: response
            });
        })
    };
};


  