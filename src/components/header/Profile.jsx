import React, {useState} from 'react';
import { Box, Menu, MenuItem, Typography, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component=styled(Menu)`
margin-top: 5px;
`

const Logout=styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`

const Profile = ({account, setAccount}) => {


        const [open, setOpen]= useState(false);

        const handleClick=(e)=>{
            setOpen(e.currentTarget);
        }

        const handleLogout=()=>{
            setAccount("");
        }

        const handleClose=()=>{
            
            setOpen(false);
        }

  return (
    <>
        <Box onClick={handleClick}>
        <Typography style={{marginTop: "2px"}}>{account}</Typography>
        </Box>

        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); handleLogout();}}>
        <PowerSettingsNewIcon color="primary" fontSize="small"/>
            <Logout>
                Logout
            </Logout>
        
        </MenuItem>
      </Component>
        
    </>
  )
}

export default Profile