import React from 'react';
import {Box, Typography, styled} from "@mui/material";


const Component=styled(Box)(({theme})=>({
    display:'flex',
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    overflow: 'hidden',
    
    [theme.breakpoints.down('lg')]:{
        margin : 0,
        // overflow: 'overlay',
    }
}))


const Container=styled(Box)`
    padding: 12px 8px;
    text-align: center;
    cursor: pointer
`
const Text=styled(Typography)`
    font-size: 18px;
    font-weight: 600;
    font-family: inherit;
    margin-top: 10px;
    color: 
`


const PaymentSuccess = () => {
  return (
    <Box style={{background: '#fff',
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
    display: 'flex'
    }}>
    <Component style={{display: 'flex'}}>
        <Container>

            <img src="paymentSuccess.gif" alt="success"/>   
            <Text>Your Payment has been successful</Text>
              
        </Container>
    </Component>
</Box>
  )
}

export default PaymentSuccess