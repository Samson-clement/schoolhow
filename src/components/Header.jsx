import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <AppBar position="static" sx={{backgroundColor:'#F6F6F6'}}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, pt: 1, pb: 1 }}>
          <img src={Logo} alt="Logo" height="60" />
        </Box>
        
        <IconButton color="black">
          <EmailOutlinedIcon />
        </IconButton>
        <IconButton color="black">
          <NotificationsOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;



