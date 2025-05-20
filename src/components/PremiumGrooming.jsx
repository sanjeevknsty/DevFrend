import React from 'react'
import SectionHeader from './SectionHeader'
// import { Box, Typography } from '@mui/material'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Flare } from '@mui/icons-material';
import CircleComponent from './HomeUtils/CircleComponenet';
import image1 from '../assets/short.png'
import image2 from '../assets/short2.png'
import image3 from '../assets/short3.png'

const PremiumGrooming = () => {
    return (
        <Box position={'relative'} sx={{overflow:"hidden"}}>
                        <CircleComponent topW={-200} topR={-400} bottomW={-100} bottomR={-100} />
            <Box>


            <SectionHeader upperText={"Premium Grooming"} text={"Our Barber Services"} />
            <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>

                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                    Professional barbering services to keep you looking sharp for everyday confidence or special
                </Typography>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>occasions</Typography>
                <Box
                    sx={{
                        width: "80%",
                        height: 400,
                        marginLeft: "100px",
                        display: "flex",
                        gap: 3,
                        padding: "10px",
                        marginTop: "50px"
                    }}>

                    <Card className="cardHover" sx={{
                        '&:hover ': {
                            border: "1px solid oklch(79.5% .184 86.047)",
                            marginTop: "-20px"
                        },'&:hover .typo-text': {
                           color:"oklch(79.5% .184 86.047)"
                        },  width: "100%", height: "100%", flex: 1, transition: "margin-top 0.3s ease ,border 0.3s ease", flexDirection: "column", p: 2, borderRadius: 3,
                        boxShadow: 5, backgroundColor: "rgb(34, 34, 34)"
                    }}>
                        <Box sx={{ width: '80px', height: '80px', borderRadius: '10px', bgcolor: "oklch(.552 .016 285.938)" }}>
                            <CardMedia
                                component="img"

                                image={image3}
                                alt="Sample Image"
                            />
                        </Box>
                        <CardContent>
                            <Typography className='typo-text' variant="h5" color='white' fontWeight="bold" sx={{ mt: 1,textAlign: "left" }}>
                                Haircuts
                            </Typography>

                            <Typography variant="body2" sx={{ textAlign: "left", marginTop: "60px", fontSize: 17, color: "oklch(.552 .016 285.938)" }}>
                                Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: "column", gap: 1, mt: 2 }}>
                                <Typography variant="caption" color="oklch(.552 .016 285.938)" sx={{ fontSize: 17,textAlign: "left"}}>
                                    Classic Cuts
                                </Typography>
                                <Typography variant="caption" color="oklch(.552 .016 285.938)" sx={{ fontSize: 17, textAlign: "left" }}>
                                    Modern Styles
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card className="cardHover" sx={{
                        '&:hover ': {
                            border: "1px solid oklch(79.5% .184 86.047)",
                            // marginTop: "100px", 
                            marginTop: "-20px"
                        }, 
                        '&:hover .typo-text-2': {
                           color:"oklch(79.5% .184 86.047)"
                        }, 

                        width: "100%", height: "100%", flex: 1, transition: "margin-top 0.3s ease ,border 0.3s ease", flexDirection: "column", p: 2, borderRadius: 3,
                        boxShadow: 5, backgroundColor: "rgb(34, 34, 34)"
                    }}>
                        <Box sx={{ width: '80px', height: '80px', borderRadius: '10px', bgcolor: "oklch(.552 .016 285.938)" }}>
                            <CardMedia
                                component="img"

                                image={image1}
                                alt="Sample Image"
                            />
                        </Box>
                        <CardContent>
                            <Typography className='typo-text-2' variant="h5" color='white' fontWeight="bold" sx={{ mt: 1,textAlign: "left"}}>
                                Beard Services
                            </Typography>

                            <Typography variant="body2" sx={{ textAlign: "left", marginTop: "60px", fontSize: 17, color: "oklch(.552 .016 285.938)" }}>
                                Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.                                              </Typography>

                            <Box sx={{ display: 'flex', flexDirection: "column", gap: 1, mt: 2 }}>
                                <Typography variant="caption" color="oklch(.552 .016 285.938)" sx={{ fontSize: 17, textAlign: "left" }}>
                                    Beard Trims
                                </Typography>
                                <Typography variant="caption" color="oklch(.552 .016 285.938)" sx={{ fontSize: 17, textAlign: "left"}}>
                                    Beard Shaping
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card className="cardHover" sx={{
                        '&:hover ': {
                            border: "1px solid oklch(79.5% .184 86.047)",
                            marginTop: "-20px"
                        },
                        '&:hover .typo-text-3': {
                           color:"oklch(79.5% .184 86.047)"
                        }, 
                         width: "100%", height: "100%", flex: 1, transition: "margin-top 0.3s ease ,border 0.3s ease", flexDirection: "column", p: 2, borderRadius: 3,
                        boxShadow: 5, backgroundColor: "rgb(34, 34, 34)"
                    }}>
                        <Box sx={{ width: '80px', height: '80px', borderRadius: '10px', bgcolor: "oklch(.552 .016 285.938)" }}>
                            <CardMedia
                                component="img"

                                image={image2}
                                alt="Sample Image"
                            />
                        </Box>
                        <CardContent>
                            <Typography className='typo-text-3' variant="h5" color='white' fontWeight="bold" sx={{ mt: 1,textAlign: "left"}}>
                                Premium Services
                            </Typography>

                            <Typography variant="body2" sx={{ textAlign: "left", marginTop: "60px", fontSize: 17, color: "oklch(.552 .016 285.938)" }}>
                                Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: "column", gap: 1, mt: 2 }}>
                                <Typography variant="caption" color="oklch(.552 .016 285.938)" sx={{ fontSize: 17,textAlign: "left" }}>
                                    Hair Coloring
                                </Typography>
                                <Typography variant="caption" color="oklch(.552 .016 285.938)" sx={{ fontSize: 17,textAlign: "left" }}>
                                    Scalp Treatments
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>

                </Box>

            </Box>

            
            
</Box>

        </Box>
    )
}

export default PremiumGrooming
