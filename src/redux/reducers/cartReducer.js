
import * as ACTIONTYPES from "../constants/cartConstants";


export const cartReducer=(state={cartItems:[]}, action)=>{
    switch(action.type){

        case ACTIONTYPES.ADD_TO_CART:
            const item= action.payload;

            const exist=state.cartItems?.some(product=> product.id === item.id);
            console.log("exist or not", exist);
            if(exist){
                console.log("exist or not if", exist);
                let cartItemsNew=[...state.cartItems];
                let productIndex=cartItemsNew.findIndex(product=> product.id === item.id);
                let product=state.cartItems[productIndex];
                cartItemsNew.splice(productIndex, 1);
                product.quantity=product?.quantity+1;
                cartItemsNew.splice(productIndex, 0, product);
                return {...state, cartItems: [...cartItemsNew]}
            }
            else{
                return {...state, cartItems: [...state.cartItems, item]}

            }

        case ACTIONTYPES.REMOVE_ONE_FROM_CART:
                const productId= action.payload;
                console.log("removeOneFromCart reducer id", productId);
                let productItem=state.cartItems?.find(product=> product.id == productId);
                console.log("removeOneFromCart reducer productItem", productItem);
                if(productItem.quantity>1){
                    console.log("removeOneFromCart reducer productItem if");
                    let cartItemsNew=[...state.cartItems];
                    let productIndex=cartItemsNew.findIndex(product=> product.id === productItem.id);
                    let product=state.cartItems[productIndex];
                    cartItemsNew.splice(productIndex, 1);
                    product.quantity=product?.quantity-1;
                    cartItemsNew.splice(productIndex, 0, product);
                    return {...state, cartItems: [...cartItemsNew]}
                }
                else{
                    console.log("removeOneFromCart reducer productItem else");
                    return {...state, cartItems: state.cartItems.filter(product=>product.id !== action.payload)}
                }

            

        case ACTIONTYPES.REMOVED_FROM_CART:
                return {...state, cartItems: state.cartItems.filter(product=>product.id !== action.payload)}

        

        case ACTIONTYPES.ADD_TO_CART_ERROR:
                return null;
        
        
        default:
            return state
    }

}