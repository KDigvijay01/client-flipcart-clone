import React from 'react';
import axios from "axios";


// const URL = `http://localhost:5000`;

// const URL=`${window.location.origin}`;
const URL=`https://server-api-ecommerce.vercel.app`;
export const authenticateSignup=async(data)=>{
    try{
       return await axios.post(`${URL}/signup`, data);
    }
    catch(err){
        console.error("Failed to authenticate signup", err);
    }
}


export const authenticateLogin=async(data)=>{
    try{
       return await axios.post(`${URL}/login`, data);
    }
    catch(err){
        console.error("Failed to authenticate login", err);
        return err.response;
    }
}

export const payUsingPaytm=async (data)=>{
    try{
        let response=await axios.post(`${URL}/payment`, data)
        return response.data;
    }
    catch(err){
        console.error("Error in Pay using paytm", err)
    }
}

export const payUsingStripe=async (data)=>{
    try{
        let response=await axios.post(`${URL}/payment`, data)

        return response.data;
    }
    catch(err){
        console.error("Error in Payment", err)
    }
}

