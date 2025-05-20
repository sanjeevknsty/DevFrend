import React from 'react'
import SectionHeader from './SectionHeader'
import {
    Box, Typography, Button, Stack
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import CallIcon from '@mui/icons-material/Call';
const VisitOurShop = () => {
    return (
        <Box sx={{bgcolor:"#12121"}}>
            <SectionHeader upperText={"Visit Our Shop"} text={"Our Location"} />
            <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                    Conveniently located in Denton, TX:

                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    // gap: -4,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    
                    paddingLeft: 20,
                    // backgroundColor: '#12121',
                }}
            >

                <Box
                    sx={{
                        backgroundColor: '#1e1e1e',
                        borderRadius: 3,
                        height: 400,
                        width: '100%',
                        maxWidth: 600,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        border: '1px solid #333',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateX(-10px)',
                        },
                    }}
                >
                    <LocationOnIcon sx={{ fontSize: 60, color: '#555' }} />
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#1e1e1e',
                        color: '#fff',
                        borderRadius: 3,
                        p: 4,
                        mx: 'auto',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateX(10px)',
                        },
                        maxWidth: 400,
                        border: '1px solid #333',
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Contact Information
                    </Typography>
                    <Box
                        sx={{
                            height: 3,
                            width: 40,
                            backgroundColor: '#facc15',
                            borderRadius: 2,
                            mb: 3,
                        }}
                    />
                    <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                        <Box
                            sx={{
                                backgroundColor: '#facc15',
                                p: 1,
                                borderRadius: '50%',
                            }}
                        >
                            <LocationOnIcon sx={{ color: '#1e1e1e' }} />
                        </Box>
                        <Box>
                            <Typography fontWeight="bold">Address</Typography>
                            <Typography color="gray" variant="body2">
                             500 N Bell Ave #109, Denton, TX 76209
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={2} alignItems="center" mb={4}>
                        <Box
                            sx={{
                                backgroundColor: '#facc15',
                                p: 1,
                                borderRadius: '50%',
                            }}
                        >
                            <PhoneIcon sx={{ color: '#1e1e1e' }} />
                        </Box>
                        <Box>
                            <Typography fontWeight="bold">Phone</Typography>
                            <Typography color="gray" variant="body2">
                                +1 940-612-9127
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            startIcon={<SendIcon />}
                            sx={{
                                bgcolor: '#facc15',
                                color: '#1e1e1e',
                                '&:hover': {
                                    bgcolor: '#eab308',
                                },
                                textTransform: 'none',
                                borderRadius: 2,
                                fontWeight: 600,
                            }}
                        >
                            Get Directions
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<CallIcon />}
                            sx={{
                                borderColor: '#333',
                                color: '#ccc',
                                textTransform: 'none',
                                borderRadius: 2,
                                fontWeight: 600,
                                '&:hover': {
                                    borderColor: '#555',
                                    color: '#fff',
                                },
                            }}
                        >
                            Call Us
                        </Button>
                    </Stack>
                </Box>
            </Box>

        </Box>
    )
}

export default VisitOurShop
