import { Box, Button, styled } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../redux/actions/cartActions';
import {loadStripe} from '@stripe/stripe-js';
import { payUsingStripe } from '../../service/api'


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',

    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    borderRadius: 2,
    height: 50,
    color: '#FFF',
    [theme.breakpoints.down('lg')]:{
            width:'46%',
    },

    [theme.breakpoints.down('sm')]:{
        width: "48%"
    }
}))
   





const ActionItems = ({product}) => {

    const dispatch= useDispatch();
    const [quantity, setQuantity]= useState(1);


    const {id} =product;
    

    const navigate=useNavigate();

    const handleAddToCart=(e)=>{
            dispatch(addtoCart(id, quantity));
            navigate("/cart");
    }

    const handlePayment=async (e)=>{
        e.preventDefault();
        const stripe= await loadStripe("pk_test_51P8UzfSEkMnQNuodvtEhhPjQx8HmUxolqqkSiMQgPkR29ok3lZTa1H8tHsd9yWokOsaNAKMJGnvkC9PUWgToNkYq00MgdbQzYQ");
        const data={
            products: [product]
        }

       let response= await payUsingStripe(data)
        console.log("response", response);
       const result=stripe.redirectToCheckout({
        sessionId: response.sessionId
       })

       if(result.error){
            console.log(result.error)
       }
    }

  return (
    <LeftContainer>
        <Image src={product.detailUrl} /><br />
        <StyledButton  style={{marginRight: 10, background: '#ff9f00'}} variant="contained" onClick={handleAddToCart}><ShoppingCartIcon />Add to Cart</StyledButton>
        <StyledButton  style={{background: '#fb641b'}} variant="contained" onClick={handlePayment}><FlashOnIcon /> Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItems