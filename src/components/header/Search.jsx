import React, {useEffect, useState} from 'react';

import {InputBase, Box, styled, List, ListItem} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productsActions';
import { Link } from 'react-router-dom';


const SearchContainer=styled(Box)`
   border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`
const SearchIconWrapper=styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    color: blue;

` 

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;



const Search = () => {

  const [text, setText]= useState('');

  const { products }= useSelector(state=>state.getProducts);
  const dispatch= useDispatch();


  useEffect(()=>{
    dispatch(getProducts());
  }, [dispatch]);


  const handleChange=(e)=>{
    let value=e.target.value;
      setText(value);
  }


  return (
        <SearchContainer>
            <InputSearchBase
                placeholder='Search for products brands and more'
                onChange={handleChange}
                value={text}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>

          {text && (
            <ListWrapper>
                {products.filter((item, index)=>
                    item.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                      <ListItem>
                          <Link to={`/product/${product.id}`}
                            onClick={()=>setText('')}
                            style={{
                              textDecoration: "none",
                              color:"inherit"
                            }}
                          >
                              {product.title.longTitle}
                          </Link>
                        
                      </ListItem>
                    )
               )}
              
            </ListWrapper>
          )}
        </SearchContainer>
  )
}

export default Search