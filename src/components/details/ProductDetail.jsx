import React from "react";
import { Box, Table, TableBody, TableCell, TableRow, Typography, styled } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";



const SmallText=styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
        font-size: 12px;
        margin-top: 10px;
    }
`

const StyledBadge=styled(LocalOfferIcon)`
    margin-right: 10px;
    color: #00cc00;
    font-size: 15px;
`

const ColumnText= styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        matrgin-top: 10px;
        border: none;
    }
`

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const date= new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <span>
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </span>
      </Typography>
      <Typography>
        <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </span>
        &nbsp;&nbsp;&nbsp;
        <span style={{ color: "#388E3C" }}>{product.price.discount} off</span>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up
          to ₹2,000 on orders of ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank OfferFlat ₹1,000 off on OneCard Credit Card and Credit EMI
          Transactions on orders of ₹10,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank OfferExtra ₹1000 off on IDFC FIRST Bank Credit Card EMI Txns on a
          Net Cart Value of ₹29,990 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Special PriceGet extra 9% off (price inclusive of cashback/coupon)T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer10% off on IDFC FIRST Bank Credit Card EMI Transactions, up
          to ₹2,000 on orders of ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Combo OfferBuy 2 items save 5%; Buy 3 or more save 7%See all
          productsT&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank OfferExtra ₹750 off on OneCard Credit Card Transactions on a Net
          Cart Value of ₹29,990 and aboveT&C
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
            <ColumnText>
                <TableCell style={{color: '#878787'}}>
                    Delivery
                </TableCell>

                <TableCell style={{fontWeight: "600"}}>
                    Delivery by {date.toDateString()}  ₹40
                </TableCell>
            </ColumnText>

            <ColumnText>
                <TableCell style={{color: '#878787'}}>
                    Warrenty
                </TableCell>

                <TableCell>
                    No warrenty
                </TableCell>
            </ColumnText>


            <ColumnText>
                <TableCell style={{color: '#878787'}}>
                    Seller
                </TableCell>

                <TableCell style={{color: '#878787'}}>
                        <Box component="span" style={{color:"#2874f0"}}>
                            SuperComNet
                        </Box>
                        <Typography>
                            GST invoice available
                        </Typography>

                        <Typography>
                                View more sellers starting from {product.price.cost}
                        </Typography>
                </TableCell>
            </ColumnText>

            <ColumnText>
                <TableCell style={{color: '#878787'}} colSpan={2}>
                    <img src={adURL} alt="adUrl" style={{width: 390}}/>
                </TableCell>
            </ColumnText>

            <ColumnText>
                <TableCell style={{color: '#878787'}}>
                    Description
                </TableCell>

                <TableCell>
                    {product.description}
                </TableCell>
            </ColumnText>
        </TableBody>

      </Table>
    </>
  );
};

export default ProductDetail;
