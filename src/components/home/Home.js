import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import {Box, styled} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productsActions';
import Slide from './Slide';
import MidSlide from './MidSlide';
import Midsection from './Midsection';

const Component=styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;


`

const Home = () => {
  const dispatch=useDispatch();
  let {products}= useSelector(state=>state.getProducts);

  
  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])

  return (
    <>
        <Navbar/>
        <Component>
            <Banner/>
            <MidSlide products={products} title="Deal of the Day" timer={true}/>
            <Midsection />
            <Slide products={products} title="Discounts For You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selection" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>

            <Slide products={products} title="Treding Offers" timer={false}/>
            <Slide products={products} title="Season Top Pics" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Component>
        
    </>
   
  )
}

export default Home;