import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <SupervisorAccountIcon />
          </IconButton>
      
          <a><Typography variant="h6" color="inherit" component="div">
            Home
          </Typography></a>
          <a><Typography variant="h6" color="inherit" component="div" sx={{marginLeft: '20px'}}>
            PMS
          </Typography></a>

          
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar;
