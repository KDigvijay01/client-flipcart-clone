import { Box, Typography, styled} from '@mui/material'
import React from 'react'


const Component= styled(Box)(({theme})=>({
    height: '65vh',
    width: '80%',
    background: '#fff',
    margin: '80px 140px',

    [theme.breakpoints.down('md')]:{
        margin: '80px 45px',
    }
}))

const Container=styled(Box)`
    text-align: center;
    padding-top: 70px;
`

const Image=styled("img")({
    width: "15%",
})

const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

  return (
        <Component>
            <Container>
                <Image src={imgurl} alt="Empty Cart"/>
                <Typography>Your cart is empty!</Typography>
                <Typography>Add items to it now</Typography>
            </Container>
        </Component>
  )
}

export default EmptyCart