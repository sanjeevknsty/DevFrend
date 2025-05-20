import React from 'react'
import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import mandha from "../assets/6metmtdl.png"
import { LocationOn } from "@mui/icons-material";
const Home = () => {
  return (
     <Box sx={{ minHeight: '100vh',display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: 500, mx: 'auto' }}>
            <Typography variant="h6" fontSize={"14px"} color="#F4BF37" gutterBottom>
              Premium Barber Services in Denton
            </Typography>

            <Typography variant="h3" fontWeight="bold" color="" gutterBottom>
              Classic Cuts, Modern Style 
            </Typography>
            <Typography variant="h3" fontWeight="bold" color="#F4BF37" gutterBottom>
              Premium Barber Shop
            </Typography>
            <Box
            className="bottom-line"

            sx={{
              position: 'absolute',
              bottom: -6,
              left: '50%',
              transform: 'translateX(-50%)',
              height: 'px',
              width: '100%',
              backgroundColor: '#F4BF37',
            //   transition: 'width 0.4s ease',
            }}
                />
                {/* </Box> */}
            <Typography variant="body1" color='oklch(.552 .016 285.938)' paragraph>
              At  Fama Barber Shop and Beauty Salon, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
            </Typography>

        <Box sx={{p:0.2,borderRadius:"20px",width:"120px",display:"flex",border:"1px solid white",justifyContent:"center",alignItems:"center"}}>

            <LocationOn/>
            <Typography variant="subtitle1" fontStyle="italic" gutterBottom>
            Denton, TX
            </Typography>
        </Box>

            <Stack direction="column" spacing={2} mt={3}>
              <Button variant="outlined" color="grey" size="large">
                          <LocalPhoneIcon/>  Our Services
              </Button>

              <Button variant="contained"  sx={{backgroundColor:"#F4BF37"}} size="large">
                            <LocalPhoneIcon/>Book Now
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={mandha}  // <-- replace with your JPG path
            alt="Barbershop"
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
          {/* <Box/> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
