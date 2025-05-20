import React from 'react'
import SectionHeader from './SectionHeader'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import CircleComponent from './HomeUtils/CircleComponenet';

const OurCommitment = () => {
    return (
        <Box  p={20}  sx={{overflow:"hidden"}}>
            <SectionHeader upperText={"Our Commitment"} text={"Why Choose FAMA Barbershop?"} />
            <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                    What makes us the premier barbershop in Denton, TX.
                </Typography>
            </Box>
            <Box sx={{
                // width: "80%",
                height: 300,
                // marginLeft: "100px",
                display: "flex",
                gap: 3,
                padding: "10px",
                marginTop: "50px"
            }}>
                <Card className="cardHover" sx={{
                    // '&:hover ': {
                    //     border: "1px solid oklch(79.5% .184 86.047)",
                    //     marginTop: "-20px"
                    // }, 
                    '&:hover .typo-text': {
                        color: "oklch(79.5% .184 86.047)"
                    }, 
                    '&:hover .upperBox': {
                       backgroundColor:"#F4BF37"
                    }, 
                    '&:hover .upperBox-text': {
                       color:"white"
                    }, 
                    width: "100%",
                     height: "100%",
                      flex: 1,
                      borderLeft:"5px solid #F4BF37",
                       transition: "margin-top 0.3s ease ,border 0.3s ease", 
                       flexDirection: "column", p: 2, borderRadius: 3,
                    boxShadow: 5, backgroundColor: "rgb(34, 34, 34)"
                }}>
                    <Box className="upperBox" sx={{ transition: "background-color 0.5s ease",width: '80px', display:"flex",alignItems: "center",justifyContent:"center", height: '80px', borderRadius: '10px', bgcolor: "oklch(.552 .016 285.938)" }}>
                        <Typography className='upperBox-text'   variant="body2" sx={{    fontSize: 17, color: "#F4BF37" }}>User</Typography>
                    </Box>
                    <CardContent>
                        <Typography className='typo-text' variant="h5" color='white' fontWeight="bold" sx={{ mt: 1, textAlign: "left" }}>
                            Expert Barbers
                        </Typography>

                        <Typography variant="body2" sx={{ textAlign: "left", marginTop: "20px", fontSize: 17, color: "oklch(.552 .016 285.938)" }}>
Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.                                        </Typography>
                    </CardContent>
                </Card>
                <Card className="cardHover" sx={{
                    // '&:hover ': {
                    //     border: "1px solid oklch(79.5% .184 86.047)",
                    //     marginTop: "-20px"
                    // }, 
                    '&:hover .typo-text': {
                        color: "oklch(79.5% .184 86.047)"
                    }, 
                    '&:hover .upperBox': {
                       backgroundColor:"#F4BF37"
                    }, 
                    '&:hover .upperBox-text': {
                       color:"white"
                    }, 
                    width: "100%",
                     height: "100%",
                      flex: 1,
                      borderLeft:"5px solid #F4BF37",
                       transition: "margin-top 0.3s ease ,border 0.3s ease", 
                       flexDirection: "column", p: 2, borderRadius: 3,
                    boxShadow: 5, backgroundColor: "rgb(34, 34, 34)"
                }}>
                    <Box className="upperBox" sx={{ transition: "background-color 0.5s ease",width: '80px', display:"flex",alignItems: "center",justifyContent:"center", height: '80px', borderRadius: '10px', bgcolor: "oklch(.552 .016 285.938)" }}>
                        <Typography className='upperBox-text'   variant="body2" sx={{    fontSize: 17, color: "#F4BF37" }}>Scissors</Typography>
                    </Box>
                    <CardContent>
                        <Typography className='typo-text' variant="h5" color='white' fontWeight="bold" sx={{ mt: 1, textAlign: "left" }}>
                            Premium Tools & Products
                        </Typography>

                        <Typography variant="body2" sx={{ textAlign: "left", marginTop: "20px", fontSize: 17, color: "oklch(.552 .016 285.938)" }}>
We use only high-quality barbering tools and premium men's grooming products to ensure the best results for your hair and skin.                                         </Typography>
                    </CardContent>
                </Card>
                <Card className="cardHover" sx={{
                    // '&:hover ': {
                    //     border: "1px solid oklch(79.5% .184 86.047)",
                    //     marginTop: "-20px"
                    // }, 
                    '&:hover .typo-text': {
                        color: "oklch(79.5% .184 86.047)"
                    }, 
                    '&:hover .upperBox': {
                       backgroundColor:"#F4BF37"
                    }, 
                    '&:hover .upperBox-text': {
                       color:"white"
                    }, 
                    width: "100%",
                     height: "100%",
                      flex: 1,
                      borderLeft:"5px solid #F4BF37",
                       transition: "margin-top 0.3s ease ,border 0.3s ease", 
                       flexDirection: "column", p: 2, borderRadius: 3,
                    boxShadow: 5, backgroundColor: "rgb(34, 34, 34)"
                }}>
                    <Box className="upperBox" sx={{ transition: "background-color 0.5s ease",width: '80px', display:"flex",alignItems: "center",justifyContent:"center", height: '80px', borderRadius: '10px', bgcolor: "oklch(.552 .016 285.938)" }}>
                        <Typography className='upperBox-text'   variant="body2" sx={{    fontSize: 17, color: "#F4BF37" }}>Home</Typography>
                    </Box>
                    <CardContent>
                        <Typography className='typo-text' variant="h5" color='white' fontWeight="bold" sx={{ mt: 1, textAlign: "left" }}>
                            Classic Barbershop Experience
                        </Typography>

                        <Typography variant="body2" sx={{ textAlign: "left", marginTop: "20px", fontSize: 17, color: "oklch(.552 .016 285.938)" }}>
Enjoy a comfortable, clean shop with a classic barbershop atmosphere where you can relax while getting a great cut or shave.                                 </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}

export default OurCommitment
