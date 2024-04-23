import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { addEllipsis } from "../../utils/common-utils";
import ButtonComponent from "./ButtonComponent";
import { useDispatch } from "react-redux";
import { removedFromCart } from "../../redux/actions/cartActions";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  diplay:flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const RemoveButton=styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;

`

const CartItems = ({ item }) => {
  const fassured ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const dispatch= useDispatch();


    const handleRemove=(id)=>{
        dispatch(removedFromCart(id))
    }

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{height: 110, width: 110}}/>
        <ButtonComponent item={item}/>
      </LeftComponent>

      <Box style={{margin: 20}}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>

        <SmallText>
          Seller: RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="fassured"
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </Box>
        </SmallText>

        <Typography style={{margin: '20px 0'}}>
          <span style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <RemoveButton onClick={()=>handleRemove(item.id)}>
            Remove
        </RemoveButton>
      </Box>
    </Component>
  );
};

export default CartItems;
