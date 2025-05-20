import React from 'react';
import { Box, Typography } from '@mui/material';
import { Scale } from '@mui/icons-material';

const SectionHeader = ({ upperText, text }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: 4,
       
      }}
    >
      <Box sx={{ 
        textAlign: 'center', 

          transition: 'all 0.3s ease',
            '&:hover .bottom-line': {
              width: '100%',
            },
            '&:hover .upper':{
              transform: 'translateY(-5px)',

            }}}>
        {/* Upper Text */}
        <Typography className="upper" variant="h6"  sx={{
            color: '#F4BF37',
            // mb: 1,
            transition: 'transform 0.3s ease',
        
          }}>
          {upperText}
        </Typography>

        {/* Header Text with Animated Underline */}
        <Box
          sx={{
            display: 'inline-block',
            position: 'relative',
            
          }}
        >
          <Typography variant="h4" sx={{fontWeight:"900" ,color:"#ffffff"}}>{text}</Typography>

          <Box
            className="bottom-line"
            sx={{
              position: 'absolute',
              bottom: -6,
              left: '50%',
              transform: 'translateX(-50%)',
              height: '4px',
              width: '40%',
              backgroundColor: '#F4BF37',
              transition: 'width 0.4s ease',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionHeader;
