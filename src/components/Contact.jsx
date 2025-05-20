import React, { useState } from 'react'
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';


const Contact = () => {
      const [focusField, setFocusField] = useState('');

  return (
    <Box
      sx={{
        // maxWidth: 500,
        backgroundColor: '#1e1e1e',
        color: '#fff',
        p: 4,
        borderRadius: 2,
        // mx: 'auto',
        my: 5,
        border: '1px solid #F4BF37',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 6px 18px rgba(244,191,55,0.2)',
        }
      }}
    >
      {/* Full Name */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            color: focusField === 'name' ? '#F4BF37' : '#fff',
            transition: 'color 0.3s ease',
          }}
        >
          Your Name
        </Typography>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Enter your full name"
          onFocus={() => setFocusField('name')}
          onBlur={() => setFocusField('')}
          sx={{
            // height:"8px",
            mt: 1,
            input: { color: '#fff' },
            fieldset: {
              borderColor: '#ccc',
            },
            '&:hover': {
              transform: 'translateY(-3px)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F4BF37',
              boxShadow: '0 0 6px #F4BF37',
            },
          }}
        />
      </Box>

      {/* Phone Number */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            color: focusField === 'phone' ? '#F4BF37' : '#fff',
            transition: 'color 0.3s ease',
          }}
        >
          Phone Number
        </Typography>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Enter your phone number"
          onFocus={() => setFocusField('phone')}
          onBlur={() => setFocusField('')}
          sx={{
            mt: 1,
            input: { color: '#fff' },
            fieldset: { borderColor: '#ccc' },
            '&:hover': {
              transform: 'translateY(-3px)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F4BF37',
              boxShadow: '0 0 6px #F4BF37',
            },
          }}
        />
      </Box>

      {/* Service Dropdown */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            color: focusField === 'service' ? '#F4BF37' : '#fff',
            transition: 'color 0.3s ease',
          }}
        >
          Service Interested In
        </Typography>
        <FormControl  variant="outlined" sx={{ mt: 1 }}>
          <Select
            defaultValue=""
            size="small"
            displayEmpty
            onFocus={() => setFocusField('service')}
            onBlur={() => setFocusField('')}
            sx={{
              color: '#fff',
              fieldset: { borderColor: '#ccc' },
              '&:hover': {
                transform: 'translateY(-3px)',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#F4BF37',
                boxShadow: '0 0 6px #F4BF37',
              },
            }}
          >
            <MenuItem disabled value="">
              Select an option
            </MenuItem>
            <MenuItem value="cut">Haircut</MenuItem>
            <MenuItem value="beard">Beard Trim</MenuItem>
            <MenuItem value="shave">Shave</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Date */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            color: focusField === 'date' ? '#F4BF37' : '#fff',
            transition: 'color 0.3s ease',
          }}
        >
          Preferred Date
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          type="date"
          onFocus={() => setFocusField('date')}
          onBlur={() => setFocusField('')}
          sx={{
            mt: 1,
            input: { color: '#fff' },
            fieldset: { borderColor: '#ccc' },
            '&:hover': {
              transform: 'translateY(-3px)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F4BF37',
              boxShadow: '0 0 6px #F4BF37',
            },
          }}
        />
      </Box>

      {/* Message */}
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            color: focusField === 'message' ? '#F4BF37' : '#fff',
            transition: 'color 0.3s ease',
          }}
        >
          Message
        </Typography>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          multiline
          rows={4}
          placeholder="Tell us about your style preferences or any questions you have"
          onFocus={() => setFocusField('message')}
          onBlur={() => setFocusField('')}
          sx={{
            mt: 1,
            textarea: { color: '#fff' },
            fieldset: { borderColor: '#ccc' },
            '&:hover': {
              transform: 'translateY(-3px)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F4BF37',
              boxShadow: '0 0 6px #F4BF37',
            },
          }}
        />
      </Box>

      {/* Submit Button */}
      <Button
        variant="contained"
        // fullWidth
        size="small"
        sx={{
          background: '#F4BF37',
          color: '#000',
          fontWeight: 'bold',
          borderRadius: 2,
          py: 1.5,
          '&:hover': {
            background: '#ffd861',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default Contact
