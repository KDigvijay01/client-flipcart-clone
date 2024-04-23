import * as ACTION_TYPES from "../constants/productConstants";


export const getProductsReducer=(state={products: []}, action)=>{
    
    switch(action.type){
        case ACTION_TYPES.GET_PRODUCT_SUCCESS:
            return {products: action.payload}
        case ACTION_TYPES.GET_PRODUCT_FAIL:
            return {error: action.payload}


        default:
        return state

    }
}


export const getProductDetailsReducer=(state={loading: false, product: {}}, action)=>{
    switch(action?.type){
        case ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST:
            return {loading: true}
            
        case ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST_SUCCESS:
            return {loading: false, product: action.payload}

        case ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST_FAIL:
            return {loading : false, error: action.payload}
        
        case ACTION_TYPES.GET_PRODUCT_DETAILS_REQUEST_RESET:
            return {product: {}}

        default:
        return state

    }
}