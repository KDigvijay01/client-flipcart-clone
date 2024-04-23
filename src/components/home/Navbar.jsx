import React from 'react';
import {Box, Typography, styled} from "@mui/material";
import { navData } from '../../constants/data';


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
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`



const Navbar = () => {
  return (
    <Box style={{background: '#fff'}}>
        <Component style={{display: 'flex'}}>
            {
                navData.map((data, index)=>(
                    <Container key={index}>
                        <img src={data?.url} alt="nav" style={{width: 64}}/>
                        <Text>{data?.text}</Text>
                    </Container>
                ))
            }
        </Component>
    </Box>
  )
}

export default Navbar