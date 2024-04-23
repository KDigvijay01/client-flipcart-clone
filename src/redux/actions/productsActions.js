import axios from "axios";
import * as ACTION_TYPES from "../constants/productConstants";




// const URL = `http://localhost:5000`;
// const URL=`${window.location.origin}`;
const URL=`https://server-api-ecommerce.vercel.app`;


export const getProducts=()=>async (dispatch)=>{
    try{
        let {data} = await axios.get(`${URL}/products`);
        dispatch({type: ACTION_TYPES.GET_PRODUCT_SUCCESS, payload: data})
    }
    catch(err){
        console.error("Error while calling getProducts api", err.message);
        dispatch({type: ACTION_TYPES.GET_PRODUCT_FAIL, payload: err.message});
    }
}


export const getProductDeatails=(id)=>async(dispatch)=>{
    try{
        dispatch({type: ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST})
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type: ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST_SUCCESS, payload: data});
    }
    catch(err){
        console.error("Error in get product details ", err);
        dispatch({type: ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST_FAIL, payload: err.message});
    }
}