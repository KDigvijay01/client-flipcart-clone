import React, {useState, useEffect, useContext} from "react";

import {
  Dialog,
  DialogContent,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { authenticateLogin, authenticateSignup } from "../../service/api";
import { DataContext } from "../../context/DataProvider";

const Component = styled(DialogContent)`
  height: 70vh;
  width: 90vh;
  padding: 0;
  padding-top: 0;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 84.5%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  overflow: auto;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const ReauestOtp = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error=styled(Typography)`
  font-size: 10px;
  font-weight: 600;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
`

const accountInitialValues={
    login:{
        view:"login",
        heading: "Login",
        subHeading: "Get access to your Order, Wishlist and Recommendations"
    },
    signup:{
        view: "signup",
        heading: "Looks like you're new here!",
        subHeading: "Sign up with mobile number to get started"
    }
}

const signupInitialValues={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:""
}


const loginInitialValues={
  username:"",
  password:""
}

const LoginDialogue = ({ open, setOpen }) => {
    
    
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);

    const [login, setLogin]= useState(loginInitialValues);
    const [error, setError]= useState(false);

    const {setAccount}= useContext(DataContext);


    const handleClose = (e) => {
        setOpen(false);
        setError(false);
        toggleAccount(accountInitialValues.login)
    };

    const handleToggleSignup=(e)=>{
        toggleAccount(accountInitialValues.signup)
    }

    const handleChange=(e)=>{
        console.log("value", e.target.value);
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    console.log("signup", signup)
    
    const handleSignupUser=async (e)=>{
        let response = await authenticateSignup(signup);
        console.log("signup response", response)
        if(!response){
          return;
        }
        handleClose();
        setAccount(signup.firstname);

    }


    const handleInputChange=(e)=>{
        setLogin({...login, [e.target.name]: e.target.value});

    }

    const loginUser=async(e)=>{
        const response= await authenticateLogin(login);

        if(response.status===2000){
          handleClose();
          setAccount(response.data.data.firstname);
        }
        else{
            setError(true);
        }
    }


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account?.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
                {account?.subHeading}
            </Typography>
          </Image>
          {account?.view==="signup" ? (
            <Wrapper>
              <TextField variant="standard" onChange={handleChange} name="firstname" label="Enter Firstname" />
              <TextField variant="standard" onChange={handleChange} name="lastname" label="Enter Lastname " />
              <TextField variant="standard" onChange={handleChange} name="username" label="Enter Username" />
              <TextField variant="standard" onChange={handleChange} name="email" label="Enter Email" />
              <TextField variant="standard" onChange={handleChange} name="password" label="Enter Password" />
              <TextField variant="standard" onChange={handleChange} name="phone" label="Enter Phone" />
              <LoginButton onClick={handleSignupUser}>Continue</LoginButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField variant="standard" onChange={handleInputChange} name="username" label="Enter Username" />
              <TextField variant="standard" onChange={handleInputChange} name="password" label="Enter Password" />
             
             {error && 
                <Error>
                  please enter valid login credentials
                </Error>
              }
              <Text>
                By continuing you agree to Flipkart's terms and Privacy Policy.
              </Text>
              <LoginButton onClick={loginUser}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <ReauestOtp>Request OTP</ReauestOtp>
              <CreateAccount onClick={handleToggleSignup}>New to Flipkart? Create an account</CreateAccount>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
