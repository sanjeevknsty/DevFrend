import SectionHeader from './SectionHeader'
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Modal,
  IconButton,
  Button,
  Backdrop,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image1 from  '../assets/gallery1.jpg'
import Image2 from  '../assets/gallery3.jpg'
import Image3 from  '../assets/about.jpg'

const images = [
Image1,
Image2,
Image3,


];



const WorkShop = () => {
    const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <Box sx={{p:20}}>
      <SectionHeader upperText={"Our Work & Shop"} text={"Our Barbershop Gallery"}/>
        <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
                </Typography>
        </Box>

           <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              width: 260,
              height: 180,
              borderRadius: 2,
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid #333',
              '&:hover .overlay': { opacity: 1 },
               '&:hover ':{
            border:"1px solid white",
            scale:"1.02"
          }
            }}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                opacity: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s',
              }}
            >
              <Button
                variant="contained"
                startIcon={<VisibilityIcon />}
                sx={{
                  backgroundColor: '#333',
                  color: '#fff',
                  textTransform: 'none',
                  borderRadius: 4,
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#444',
                  },
                }}
                onClick={() => handleOpen(index)}
              >
                View
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{ backdrop: { timeout: 500 } }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: 700,
            bgcolor: '#000',
            p: 2,
            borderRadius: 2,
            boxShadow: 24,
            outline: 'none',
            textAlign: 'center',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 10, right: 10, color: '#fff' }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={images[activeIndex]}
            alt="Enlarged"
            style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain' }}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
            }}
          >
            <IconButton onClick={handlePrev} sx={{ color: '#fff' }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <Typography variant="body2" color="white">
              {activeIndex + 1} / {images.length}
            </Typography>
            <IconButton onClick={handleNext} sx={{ color: '#fff' }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </Box>

    
    
  )
}

export default WorkShop
