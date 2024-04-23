import { Box, ButtonGroup, Button,  styled} from '@mui/material';

import React, {useState, useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { addtoCart, removeOneFromCart } from '../../redux/actions/cartActions';


const Component=styled(ButtonGroup)`
    margin-top: 30px;
`

const StyledButton=styled(Button)`
    border-radius: 50%;
`



const ButtonComponent = ({item}) => {

    const dispatch= useDispatch();
    const [product, setProduct]= useState();
    const [quantity, setQuantity]= useState(1);

    useEffect(()=>{
        if(item){
            setProduct(item);
        }
    }, [item])


    // console.log("this is the item", item);
    // console.log("this is the product", product);


    const handleRemove=(e)=>{
        console.log("in handle remove");
        if(quantity>1){
            e.preventDefault();
            setQuantity(quantity-1);
            dispatch(removeOneFromCart(product.id));
        }
        else{
            alert("only one item of this kind left")
        }
    }

    const handleAdd=(e)=>{
        e.preventDefault();
        console.log("in handle add ");
        setQuantity(quantity+1);
        dispatch(addtoCart(product.id, quantity));
    }


  return (
        <Component>
            <StyledButton onClick={handleRemove}>
                -
            </StyledButton>

            <Button disabled>
                {product?.quantity ?? quantity}
            </Button>

            <StyledButton onClick={handleAdd}>
                +
            </StyledButton>
        </Component>
  )
}

export default ButtonComponent