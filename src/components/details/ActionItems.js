import { Box, Button, styled } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';


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
        let response=await payUsingPaytm({
            amount: 500, email: "abcd@gmail.com"
        })
        let information= {
            action: "https://securegw-stage.paytm.in/order/process",
            params: response,

        }

        post(information)
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