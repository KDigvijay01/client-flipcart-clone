import { Box, Typography, styled } from '@mui/material'
import React, { useState, useEffect } from 'react';



const Header=styled(Box)`
    padding: 15px 24px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading=styled(Typography)`
    color: #878787;
`;


const Container= styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }
    & > h6{
        margin-bottom: 20px;
        border-top: 1px dashed #e0e0e0;
        font-weight: 500;
        font-size: 18px;
    }
`

const Price=styled(Box)`
    float: right;
`

const Discount= styled(Typography)`
    color: green;
    font-weight: 500;
    
`



const TotalView = ({cartItems}) => {
        
    const [price, setPrice]= useState(0);
    const [discount, setDiscount] = useState(0)


    useEffect(()=>{
        totalAmount();
    }, [cartItems])
    
    const totalAmount=()=> {
        let price=0;
        let discount=0;
        cartItems.map(item=>{
            price+=(item.price.mrp)*item.quantity;
            discount+= (item.price.mrp - item.price.cost)*item.quantity;
        });

            setPrice(price);
            setDiscount(discount);
    }

    // {cartItems?.length} item

  return (
        <Box>
            <Header>
                    <Heading>
                        PRICE DETAILS
                    </Heading>
            </Header>

            <Container>
                <Typography>
                    Price 
                
                <Price component= "span">
                ₹{price}
                </Price>
                </Typography>

                <Typography>
                    Discount
                
                <Price component= "span">
                -₹{discount}
                </Price>
                </Typography>
                <Typography>
                    Delivery Charges
                <Price component= "span">
                        ₹40
                </Price>
                </Typography>
                <Typography variant="h6">
                    Total Amount
                <Price component= "span">
                        {price-discount+40}
                </Price>
                </Typography>

                <Discount>
                    You will save ₹{discount - 40} on this order
                </Discount>
            </Container>
        </Box>
  )
}

export default TotalView