import { Box, Button, Grid, Typography, styled} from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm, payUsingStripe } from '../../service/api';
import { post } from '../../utils/paytm';
import {loadStripe} from '@stripe/stripe-js';


const Container= styled(Grid)(({theme})=>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{
        padding: '15px 0',

    }
}))


const Header=styled(Box)`
    padding: 15px 24px;
    background: #fff;
`

const ButtonWrapper=styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`

const StyledButton=styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    width: 250px;
    height: 51px;
    color: #fff;
    border-radius: 2px;
    ${'' /* background: #fff; */}
`

const LeftComponent=styled(Grid)(({theme})=>({
    paddingRight: "15px",
    [theme.breakpoints.down('sm')]:{
        marginBottom: 15,
    }
}));

const Cart = () => {
    const { cartItems }= useSelector(state=>state.cart);

    console.log("the cart items", cartItems);

    const handlePayment=async (e)=>{
        const stripe= await loadStripe("pk_test_51P8UzfSEkMnQNuodvtEhhPjQx8HmUxolqqkSiMQgPkR29ok3lZTa1H8tHsd9yWokOsaNAKMJGnvkC9PUWgToNkYq00MgdbQzYQ");
        const data={
            products: cartItems
        }

       let response= await payUsingStripe(data)
        console.log("response", response);
       const result=stripe.redirectToCheckout({
        sessionId: response.sessionId
       })

       if(result.error){
            console.log(result.error)
       }

        // let response=await payUsingPaytm({
        //     amount: 500, email: "abcd@gmail.com"
        // })
        // let information= {
        //     action: "https://securegw-stage.paytm.in/order/process",
        //     params: response,

        // }
        // post(information)



    }


  return (
        <>
            {cartItems?.length ? (
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Box>
                            <Header>
                                My Cart ({cartItems?.length})
                            </Header>
                        </Box>
                        {
                            cartItems?.map((item, index)=>(
                                <CartItems item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton onClick={handlePayment}>Place Order</StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
            ):
            (
                <EmptyCart/>
            )
            }
        </>
  )
}

export default Cart