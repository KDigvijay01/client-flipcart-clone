import React, {useState, useEffect} from 'react';

import { Box, Grid, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDeatails } from '../../redux/actions/productsActions';
import ActionItems from './ActionItems';
import ProductDetail from './ProductDetail';



const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding: 2px 0 0 50px;
    & > p {
        margin-top: 10px;
    }
`;




const DetailView = () => {

    const {id} = useParams();

    // console.log("this is the id", id)

    const { loading, product } = useSelector(state => state.getProductDetails);


    // console.log("producttt111", product, loading)


    const dispatch= useDispatch();

    useEffect(()=>{
        if(product && id !== product?.id){
          dispatch(getProductDeatails(id));
        }

    }, [dispatch, id, product, loading])

    

    // console.log("producttt", product, loading)


  return (

    <Component>
    <Box></Box>
    { product && Object.keys(product).length &&
        <Container container> 
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItems product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                <ProductDetail product={product} />
            </RightContainer>
        </Container>
    }   
</Component>
  )
}

export default DetailView