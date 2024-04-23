import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Box, styled, Typography, IconButton, Drawer, List, ListItem } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { useNavigate } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
      margin-left: 12%;
      line-height: 0;
      cursor: pointer;
`;


const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonwrapper = styled(Box)(({theme})=>({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down('md')]:{
    display: "none",

  }

}))

const MenuButton=styled(IconButton)(({theme})=>({
    display: "none",
    [theme.breakpoints.down("md")]:{
      display: 'block',
    }
}))




const Header = () => {

    const navigate= useNavigate();
    const [open, setOpen]= useState(false);
    // const []

  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  
  const handleClick=(e)=>{
    return navigate("/");

  }


  const handleOpen=(e)=>{
    setOpen(true);
  }

  const handleClose=(e)=>{
    setOpen(false);
  }

  const listItem=()=>{
    return (
      <Box style={{width: 200, }} onClick={handleClose}>
        <List>
          <ListItem button>
              <CustomButtons />
          </ListItem>
        </List>
      </Box>
    )
  }

  return (

    <StyledHeader>
      <Toolbar
        style={{
          minHeight: "55px",
        }}
      >
          <MenuButton color="inherit" onClick={handleOpen}>
              <Menu/>
          </MenuButton>
          <Drawer open={open} onClose={handleClose}>
            {listItem()}
          </Drawer>
          <Component 
          onClick={handleClick} 
          to='/'>
            <img
              src={logoURL}
              alt="logo"
              style={{
                width: "75px",
              }}
            />

            <Box
              style={{
                display: "flex",
              }}
            >
              <Subheading>
                Explore&nbsp;
                <Box
                  component="span"
                  style={{
                    color: "#FFE500",
                  }}
                >
                  Plus
                </Box>
              </Subheading>
              <PlusImage src={subURL} alt="sublogo" />
            </Box>
          </Component>
        {/* </NavLink> */}

        <Search />

        <CustomButtonwrapper>
          <CustomButtons />
        </CustomButtonwrapper>
      </Toolbar>
    </StyledHeader>

  );
};

export default Header;
