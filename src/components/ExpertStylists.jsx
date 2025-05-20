import React from 'react'
import SectionHeader from './SectionHeader'
import { Box, Card, CardContent, CardMedia, Typography, Divider, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import image1 from '../assets/gallery1.jpg'
import image2 from '../assets/staff1.jpg'
import image3 from '../assets/staff2.jpg'
import CardSectionHeader from './HomeUtils/CardSectionHeader';

const ExpertStylists = () => {
    const image = image1;
    const description = "With over 15 years of experience, Jason founded FAMA Barbershop to bring premium men's grooming services to Denton. Specializing in classic..."
    const description2 = "Marcus brings 8 years of experience to FAMA Barbershop. His expertise in fades, beard sculpting, and precision lineup work has earned him a loyal..."
    const description3 = "Terrence specializes in modern men's styling, textured cuts, and hair designs. With his creative approach and technical skill, he excels at..."
    return (
        <div>
            <SectionHeader upperText={"Expert Stylists"} text={"Meet Our Barbers"} />
            <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                    Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
                </Typography>
            </Box>

            <Box sx={{padding:"100px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Card
                    sx={{
                        width: 320,
                        backgroundColor: '#1e1e1e',
                        color: '#fff',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 0 12px rgba(0,0,0,0.3)',
                        mx: 'auto',
                        transition : "transform 0.3s ease",
                        '&:hover ':{
                            border:"1px solid #F4BF37",
                            transform : "scale(1.02)"
                        },
                           '&:hover .image1':{
                           transform:"scale(1.1)"
                        }
                    }}
                >
                    <CardMedia className='image1'
                        component="img"
                        height="200"
                        image={image}
                        alt={name}
                        sx={{ objectFit: 'cover' ,transition : "transform 0.3s ease"}}
                    />

                    <CardContent>
                        <CardSectionHeader lowerText={"Senior Barber"} text={"Marcus Williams"} />

                        <Typography
                            variant="body2"
                            align="center"
                            color="gray"
                            sx={{
                                mb: 2,
                                px: 1
                            }}
                        >
                            {description.length > 150 ? description.slice(0, 150) + '...' : description}
                        </Typography>

                        <Box display="flex" justifyContent="center" gap={2}>
                            <IconButton sx={{ bgcolor: '#F4BF37', color: '#1e1e1e' }} size="small">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ bgcolor: '#F4BF37', color: '#1e1e1e' }} size="small">
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: 320,
                        backgroundColor: '#1e1e1e',
                        color: '#fff',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 0 12px rgba(0,0,0,0.3)',
                        mx: 'auto',
                         transition : "transform 0.3s ease",
                        '&:hover ':{
                            border:"1px solid #F4BF37",
                            transform : "scale(1.02)"
                        },
                           '&:hover .image2':{
                           transform:"scale(1.1)"
                        }
                    }}
                >
                    <CardMedia className='image2'
                        component="img"
                        height="200"
                        image={image2}
                        alt={name}
                        sx={{ objectFit: 'cover',transition : "transform 0.3s ease", }}
                    />

                    <CardContent>
                        <CardSectionHeader lowerText={"Barber & Stylist"} text={"Terrence Jackson"} />


                        <Typography
                            variant="body2"
                            align="center"
                            color="gray"
                            sx={{
                                mb: 2,
                                px: 1
                            }}
                        >
                            {description2.length > 150 ? description2.slice(0, 150) + '...' : description2}
                        </Typography>

                        <Box display="flex" justifyContent="center" gap={2}>
                            <IconButton sx={{ bgcolor: '#F4BF37', color: '#1e1e1e' }} size="small">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ bgcolor: '#F4BF37', color: '#1e1e1e' }} size="small">
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: 320,
                        backgroundColor: '#1e1e1e',
                        color: '#fff',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 0 12px rgba(0,0,0,0.3)',
                        mx: 'auto',
                         transition : "transform 0.3s ease",
                        '&:hover ':{
                            border:"1px solid #F4BF37",
                            transform : "scale(1.02)"
                        },
                        '&:hover .image3':{
                           transform:"scale(1.1)"
                        }
                    }}
                >
                    <CardMedia className='image3'
                        component="img"
                        height="200"
                        image={image3}
                        alt={name}
                        sx={{ objectFit: 'cover',transition : "transform 0.3s ease", }}
                    />

                    <CardContent>
                        <CardSectionHeader lowerText={"Owner & Master Barber"} text={"Jason Rodriguez"} />
                        {/* <Divider
                    sx={{
                        bgcolor: '#F4BF37',
                        height: 3,
                        width: 40,
                        mx: 'auto',
                        my: 1,
                        borderRadius: 10
                    }}
                />

                <Typography variant="h6" align="center" fontWeight="bold">
                    {name}
                </Typography>

                <Typography
                    variant="subtitle2"
                    align="center"
                    sx={{ color: '#F4BF37', mb: 2 }}
                >
                    {title}
                </Typography> */}

                        <Typography
                            variant="body2"
                            align="center"
                            color="gray"
                            sx={{
                                mb: 2,
                                px: 1
                            }}
                        >
                            {description3.length > 150 ? description3.slice(0, 150) + '...' : description3}
                        </Typography>

                        <Box display="flex" justifyContent="center" gap={2}>
                            <IconButton sx={{ bgcolor: '#F4BF37', color: '#1e1e1e' }} size="small">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton sx={{ bgcolor: '#F4BF37', color: '#1e1e1e' }} size="small">
                                <FacebookIcon />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default ExpertStylists
