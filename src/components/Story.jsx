import React from 'react'
import SectionHeader from './SectionHeader'
import { Box, Grid, Typography, Divider } from '@mui/material';
import About from "../assets/about.jpg"
import { Block } from '@mui/icons-material';

const Story = () => {
    return (
        <Box sx={{ p: 20 }}>
            <SectionHeader upperText={"Our Story"} text={"About PMC Barbershop"} />
            <Box >
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography variant="subtitle1"  fontSize={17}  color='oklch(.552 .016 285.938)'>
Established in 2018, PMC Barbershop has been providing premium grooming services to the 
</Typography>
                    <Typography variant="subtitle1"  fontSize={17}  color='oklch(.552 .016 285.938)'>
men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a 
</Typography>
                    <Typography variant="subtitle1"  fontSize={17}  color='oklch(.552 .016 285.938)'>
welcoming, classic barbershop environment.                    
</Typography>

                </Box>

                <Box  sx={{
                    display:"flex",
                    gap:2,
                    
                }}>
                    <Box sx={{
                        width:"50%",
                         overflow:"hidden" ,
                         '&:hover .aboutjpg':{
                        // width:"105%"
                        transform: 'scale(1.05)'
                    } 
                    }}>

                    <Box className='aboutjpg'
                        component="img"
                        src={About} 
                        alt="Barbershop"
                        sx={{
                            // width: '50%',
                            maxHeight: 400,
                            objectFit: 'cover',
                            borderRadius: 2,
                            transition: "transform 0.6s ease",
                            boxShadow: 3,
                        }}
                        />
                    </Box>

                    <Box width={"50%"}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
                            <Box
                                sx={{
                                    flex: 1,
                                    // backgroundColor: '#fafafa',
                                    p: 3,
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    borderLeft:"1px solid #F4BF37"
                                }}
                            >
                                <Typography  variant="body2" fontSize={17}  color='oklch(.552 .016 285.938)'>
Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.                                </Typography>
                            </Box>

                            {/* Bottom Right Box */}
                            <Box
                                sx={{
                                    flex: 1,
                                    backgroundColor: "rgb(34, 34, 34)",
                                    p: 3,
                                    borderRadius: 2,
                                    boxShadow: 1,
                                    '&:hover .underlineborder':{
                                        // transform: 'opacity(1)'
                                        opacity:1,
                                    },
                                    '&:hover .text':{
                                        // transform: 'marginleft(3px)',
                                        marginLeft : "3px"
                                    }
                                }}
                            >
                                <Typography variant="body2" className='text' sx={{transition: "margin-left 0.5s ease"}} fontSize={17}  color='oklch(.552 .016 285.938)' >

                                    We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.              
                                    </Typography>
                                    <Box className="underlineborder" 
                                     sx={{
                                        marginTop:"5px",
                                        width:"100%",
                                        height:"1px",
                                        opacity:0,
                                        bgcolor:"#F4BF37",
                                        transition: "opacity 0.5s ease",

                                    }} />

                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Story
