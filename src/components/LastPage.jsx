import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const LastPage = () => {
  return (
    <div>
       <Box sx={{
        backgroundColor: '#FDC735',
        color: '#1a1a1a',
        textAlign: 'center',
        py: 8,
        px: 2,
      }}>
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Ready for a Fresh Cut?
        </Typography>
        <Typography variant="body1" maxWidth={600} mx="auto" mb={4}>
          Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to
          give you a clean, precise cut and a relaxing barbershop experience.
        </Typography>
        <Box display="flex" justifyContent="center" gap={2}>
          <Button variant="contained" sx={{ bgcolor: 'white', color: '#1a1a1a' }}>Book an Appointment</Button>
          <Button variant="contained" sx={{ bgcolor: '#1a1a1a', color: 'white' }}>View Our Services</Button>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box sx={{
        backgroundColor: '#1a1a1a',
        color: '#f1f1f1',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        py: 6,
        px: 4,
      }}>
        {/* Logo and Socials */}
        <Box maxWidth={220}>
          <img src="/logo.png" alt="Company Logo" style={{ width: 120, marginBottom: 12 }} />
          <Typography variant="body2" color="gray">Classic cuts with modern style</Typography>
          <Box display="flex" gap={2} mt={2}>
            <Button sx={{ bgcolor: '#FDC735', minWidth: 0, p: 1, borderRadius: '50%' }}><InstagramIcon /></Button>
            <Button sx={{ bgcolor: '#FDC735', minWidth: 0, p: 1, borderRadius: '50%' }}><FacebookIcon /></Button>
          </Box>
        </Box>

        {/* Quick Links */}
        <Box>
          <Typography variant="h6" mb={2}>Quick Links</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Services</Typography>
            <Typography>Gallery</Typography>
            <Typography>Contact</Typography>
          </Box>
        </Box>

        {/* Contact Info */}
        <Box>
          <Typography variant="h6" mb={2}>Contact Us</Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOnIcon sx={{ mr: 1, color: '#FDC735' }} />
            <Typography>500 N Bell Ave #109, Denton, TX 76209</Typography>
          </Box>
          <Typography mt={1}>+1 940 808 1569</Typography>
        </Box>

        {/* Newsletter */}
        <Box>
          <Typography variant="h6" mb={2}>Newsletter</Typography>
          <Typography variant="body2" mb={1}>Subscribe to our newsletter to receive updates and news.</Typography>
          <TextField
            variant="outlined"
            placeholder="Your email"
            size="small"
            fullWidth
            sx={{ input: { color: 'white' }, mb: 2, backgroundColor: '#1a1a1a', border: '1px solid #ccc' }}
          />
          <Button fullWidth sx={{ bgcolor: '#FDC735', color: '#1a1a1a' }}>Subscribe</Button>
        </Box>
      </Box>

      {/* Bottom Footer */}
      <Box sx={{
        backgroundColor: '#1a1a1a',
        color: '#888',
        py: 2,
        px: 4,
        textAlign: 'center',
        borderTop: '1px solid #333',
      }}>
        <Typography variant="body2">
          © 2023 PMC Barbershop. All rights reserved.
        </Typography>
        <Box mt={1} display="flex" justifyContent="center" gap={4}>
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Services</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default LastPage
