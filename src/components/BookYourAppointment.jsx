import React from 'react'
import { Box, Typography, Stack, Avatar } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Contact from './Contact'
import SectionHeader from './SectionHeader';

const BookYourAppointment = () => {
    const infoItems = [
        {
            icon: <RoomIcon />,
            title: 'Address',
            content: '500 N Bell Ave #109, Denton, TX 76209',
        },
        {
            icon: <PhoneIcon />,
            title: 'Phone',
            content: '+1 940-612-9127',
        },
        {
            icon: <AccessTimeIcon />,
            title: 'Business Hours',
            content: 'Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed',
        },
    ];
    return (
        <Box p={20} >
            <SectionHeader upperText={"Book Your Appointment"} text={'Contact Us'} />
            <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
                    Ready for a fresh look? Book your appointment today or contact us for any questions.
                </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" , gap:2}}>
                <Box width={"30%"} height={610} marginTop={-7}
                sx={{
                    transition : "transform 0.5s ease",
                    '&:hover ':{
                        transform: "scale(1.02)"
                    }
                }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#1e1e1e',
                            color: '#fff',
                            border: '2px solid #F4BF37',
                            borderRadius: 2,
                            p: 3,
                            maxWidth: 400,
                            height: "100%",
                            mx: 'auto',
                        }}
                    >
                        {infoItems.map((item, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                spacing={2}
                                alignItems="flex-start"
                                sx={{
                                    mb: 4,
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateX(8px)',
                                    },
                                }}
                            >
                                <Avatar
                                    sx={{
                                        bgcolor: '#F4BF37',
                                        color: '#000',
                                        width: 40,
                                        height: 40,
                                    }}
                                >
                                    {item.icon}
                                </Avatar>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="gray">
                                        {item.content}
                                    </Typography>
                                </Box>
                            </Stack>
                        ))}
                    </Box>
                </Box>
                <Box width={"70%"}>
                    <Contact />
                </Box>
            </Box>
        </Box>
    )
}

export default BookYourAppointment
