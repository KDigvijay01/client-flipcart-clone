import axios from "axios";
import * as ACTIONTYPES from "../constants/cartConstants";



// const URL= `https://flipkart-clone-backend-gamma.vercel.app`;
// const URL = `http://localhost:5000`;
const URL=`https://server-api-ecommerce.vercel.app`;


export const addtoCart=(id, quantity)=>async (dispatch)=>{

    try{
        const {data}=await axios.get(`${URL}/product/${id}`);
        dispatch({type: ACTIONTYPES.ADD_TO_CART, payload: {...data, quantity}});

    }
    catch(err){
        console.error("Error in add cart", err);
        dispatch({type: ACTIONTYPES.ADD_TO_CART_ERROR, payload: err.message});
    }

    
}

export const removeOneFromCart=(id)=>(dispatch)=>{
    console.log("removeOneFromCart", id);
    dispatch({type: ACTIONTYPES.REMOVE_ONE_FROM_CART, payload: id})
}


export const removedFromCart=(id)=>(dispatch)=>{

    // try{
        
            dispatch({type: ACTIONTYPES.REMOVED_FROM_CART, payload: id})
    // }
    // catch(err){
    //     console.error("Error in add cart", err);
    // }
}