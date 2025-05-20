import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../assets/logo (2).jpg'
import CookieIcon from '@mui/icons-material/Cookie';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';
import { Padding } from '@mui/icons-material';

const pages = ['Home', 'About', 'Services',"Gallery","Contact"];

const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
return( <AppBar position="fixed" sx={{ backgroundColor: "#1a1a11"}}>
      <Container maxWidth="xl" height="100%">
        <Toolbar disableGutters sx={{height:"13vh", display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          {/* <Logo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
        
        <Box sx={{marginLeft:"10rem"}} component="img" src={Logo} alt="WebP Example" height={50} width={70} />


          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
         
          <Box sx={{  display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
              >
                {page}
              </Button>
            ))}
        </Box>
        <Box  sx={{ display:"flex",justifyContent:"center",alignItems:"center",marginRight:"10rem",gap:"20px"}}>

            <CookieIcon />
            <LanguageIcon/>
            <LocalPhoneIcon/>
            <Typography>+1 940-612-9127</Typography>
            <Button sx={{bgcolor:"oklch(79.5% .184 86.047)"}} variant="contained"><Typography sx={{fontWeight:"600"}}>Book an Appoinment</Typography></Button>

        </Box>
        {/* <Box sx={{marginRight:"3rem"}}>
            <Button sx={{bgcolor:"oklch(79.5% .184 86.047)"}} variant="contained"><Typography sx={{fontWeight:"600"}}>Book an appoinment</Typography></Button>
        </Box> */}

          
         
        </Toolbar>
      </Container>
    </AppBar>
  );
 
}

export default Header;
