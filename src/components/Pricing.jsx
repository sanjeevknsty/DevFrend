import React from 'react'
import SectionHeader from './SectionHeader'
import {
    Box,
    Typography,
    Button,
    Chip,
    List,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ListUtils from './HomeUtils/ListUtils';
import { FiveK } from '@mui/icons-material';




const Pricing = () => {
    return (
        <div>
            <SectionHeader upperText={"Quality Barbering at Fair Prices"} text={"Our Service Prices"} />
            <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                    Choose from our range of professional barbering services.
                </Typography>


            </Box>
            <Box sx={{display:'flex', flexDirection:"row",justifyContent:'center',alignItems:"center",gap:3}}>

                <Box
                    sx={{
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        borderRadius: 3,
                        border: '1px solid #F4BF37',
                        p: 3,
                        scale:"1.03",
                        width: 350,
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 0 15px rgba(0,0,0,0.4)',
                         transition: "transform 0.3s ease",
                         '&:hover ': {
                            transform: 'scale(1.01)',

                        }
                    }}
                >
                    <Chip
                        label="Most Popular"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            borderRadius: '0 0 0 12px',
                            backgroundColor: '#F4BF37',
                            fontWeight: 'bold',
                        }}
                    />

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Classic Services
                    </Typography>

                    <Box
                        sx={{
                            height: '3px',
                            width: 30,
                            backgroundColor: '#F4BF37',
                            mb: 2,
                        }}
                    />

                    {/* Price */}
                    <Box sx={{
                        display: 'flex', alignItems: 'baseline', mb: 3,
                        '&:hover .dollar ': {
                            transform: 'scale(1.05)'
                        }
                    }}>
                        <Typography className='dollar' variant="h6" fontWeight="medium" sx={{ mr: 1, transiton: "transform 0.5s ease" }}>
                            $
                        </Typography>
                        <Typography className='dollar' variant="h3" fontWeight="bold" sx={{ transiton: "transform 0.5s ease" }} color="#F4BF37">
                            $25
                        </Typography>
                        <Typography variant="body2" sx={{ ml: 1 }}>
                            /mo
                        </Typography>
                    </Box>

                    <List sx={{ p: 0 }}>
                        <ListUtils text={'Men\'s Haircut'} />
                        <ListUtils text={'Kids Haircut (12 & under)'} />
                        <ListUtils text={'Senior Haircut (65+)'} />
                        <ListUtils text={'Military/First Responder Cut'} />
                        <ListUtils text={'Basic Beard Trim'} />
                        <ListUtils text={'Neck & Line Cleanup (between cuts)'} />
                    </List>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 4,
                            backgroundColor: '#F4BF37',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '#e0a800',
                            },
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        borderRadius: 3,
                        p: 3,
                        width: 350,    
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 0 15px rgba(0,0,0,0.4)',
                         transition: "transform 0.3s ease,border 0.3s ease",
                         '&:hover ': {
                            transform: 'scale(1.05)',
                            border: '1px solid #F4BF37',

                        }
                    }}
                >
                

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Classic Services
                    </Typography>

                    <Box
                        sx={{
                            height: '3px',
                            width: 30,
                            backgroundColor: '#F4BF37',
                            mb: 2,
                        }}
                    />

                    {/* Price */}
                    <Box sx={{
                        display: 'flex', alignItems: 'baseline', mb: 3,
                        '&:hover .dollar ': {
                            transform: 'scale(1.05)'
                        }
                    }}>
                        <Typography className='dollar' variant="h6" fontWeight="medium" sx={{ mr: 1, transiton: "transform 0.5s ease" }}>
                            $
                        </Typography>
                        <Typography className='dollar' variant="h3" fontWeight="bold" sx={{ transiton: "transform 0.5s ease" }} color="#F4BF37">
                            $35
                        </Typography>
                        <Typography variant="body2" sx={{ ml: 1 }}>
                            /mo
                        </Typography>
                    </Box>

                    <List sx={{ p: 0 }}>
                        <ListUtils text={'Haircut & Beard Combo'} />
                        <ListUtils text={'Hot Towel Shave'} />
                        <ListUtils text={'Full Beard Shaping & Design'} />
                        <ListUtils text={'Color Camo (Gray Blending)'} />
                        <ListUtils text={'Hair & Scalp Treatment'} />
                        <ListUtils text={'Head Shave with Hot Towel'} />
                    </List>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 4,
                            backgroundColor: '#F4BF37',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '#e0a800',
                            },
                        }}
                    >
                        Book Now
                    </Button>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#1a1a1a',
                        color: 'white',
                        borderRadius: 3,
                        p: 3,
                        width: 350,
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 0 15px rgba(0,0,0,0.4)',
                        transition: "transform 0.3s ease",
                         '&:hover ': {
                            transform: 'scale(1.05)',
                            border: '1px solid #F4BF37',

                        }
                    }}
                >
                

                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Classic Services
                    </Typography>

                    <Box
                        sx={{
                            height: '3px',
                            width: 30,
                            backgroundColor: '#F4BF37',
                            mb: 2,
                        }}
                    />

                    {/* Price */}
                    <Box sx={{
                        display: 'flex', alignItems: 'baseline', mb: 3,
                        '&:hover .dollar ': {
                            transform: 'scale(1.05)'
                        }
                    }}>
                        <Typography className='dollar' variant="h6" fontWeight="medium" sx={{ mr: 1, transiton: "transform 0.5s ease" }}>
                            $
                        </Typography>
                        <Typography className='dollar' variant="h3" fontWeight="bold" sx={{ transiton: "transform 0.5s ease" }} color="#F4BF37">
                            $50
                        </Typography>
                        <Typography variant="body2" sx={{ ml: 1 }}>
                            /mo
                        </Typography>
                    </Box>

                    <List sx={{ p: 0 }}>
                        <ListUtils text={'The Works (Cut, Shave, Treatment)'} />
                        <ListUtils text={'Father & Son Combo'} />
                        <ListUtils text={'Groom\'s Package'} />
                        <ListUtils text={'Monthly Membership (2 cuts/mo)'} />
                        <ListUtils text={'First-Time Client Special'} />
                        <ListUtils text={'Loyalty Program'} />
                    </List>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 4,
                            backgroundColor: '#F4BF37',
                            color: 'black',
                            fontWeight: 'bold',
                            borderRadius: 2,
                            '&:hover': {
                                backgroundColor: '#e0a800',
                            },
                        }}
                    >
                        Inquire
                    </Button>
                </Box>
              
            </Box>

        </div>
    )
}

export default Pricing
