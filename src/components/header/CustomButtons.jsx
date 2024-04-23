import React, {useState, useEffect, useContext} from 'react';
import {Box, Typography, styled, Button, Badge} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialogue from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Wrapper=styled(Box)(({theme})=>({
    display: 'flex',
    margin: "0 3% 0 auto",
    '& > *':{
        marginRight: "40px !important",
        fontSize: "14px",
        alignItems: "center",
    },

    [theme.breakpoints.down('md')]:{
        display: 'block'
      }
}))

const Container=styled(Link)(({theme})=>({
    display: 'flex',
    textDecoration: 'none',
    color: "inherit",
    [theme.breakpoints.down('md')]:{
      display: 'flex',

    }
  }));

const LoginButton=styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none; 
    font-weight: 600;
    height: 32px;
    text-align: center;
    
`

const CustomButtons = () => {

    const[open, setOpen]= useState(false);
    const {cartItems}= useSelector(state=>state.cart);

    const {account, setAccount} = useContext(DataContext)

    const handleButtonClick=(e)=>{
            setOpen(true)
    }
  return (
    <Wrapper>
    {account ? (
            <Profile account={account} setAccount={setAccount}/>
    ) :
       (<LoginButton variant='contained' onClick={handleButtonClick}>Login</LoginButton>)
 }
        <Typography style={{marginTop: 3, width: '135px'}}>
            Become a Seller
        </Typography>
        <Typography style={{marginTop: 3}}>
            More
        </Typography>
        <Container to={"/cart"}>
            <Badge badgeContent={cartItems?.length} color="secondary">
              <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>

            <LoginDialogue open={open} setOpen={setOpen}/>
        
    </Wrapper>
  )
}

export default CustomButtons;