import React from 'react'
import SectionHeader from './SectionHeader'
import { Box, Typography, Card, CardContent, CardActions } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
const Testimonials = () => {
    return (
        <Box backgroundColor={"#2D2D2D"} height={"100vh"} >
            <SectionHeader upperText={"Testimonials"} text={"What Our Clients Say"} />
            
            <Box sx={{display:"flex",gap:2,justifyContent:"center",alignItems:'center',marginTop:"50px" }} >

            <Card
                sx={{
                    maxWidth: 400,
                    height:400,
                    backgroundColor: '#121212',
                    color: '#fff',
                    borderRadius: 3,
                    border: '1px solid #333',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Quote Content */}
                <CardContent sx={{ p: 4, position: 'relative' }}>
                    <FormatQuoteIcon sx={{ fontSize: 30, color: '#555' }} />

                    <Typography
                        variant="body1"
                        sx={{ fontStyle: 'italic', fontWeight:"600",fontSize:17, mt: 2, mb: 2, lineHeight: 1.8 }}
                    >
                        I've been getting my hair cut at  Fama Barber Shop and Beauty Salon for over 2 years now. The
                        attention to detail is unmatched, and the atmosphere is always welcoming. My barber
                        remembers exactly how I like my fade every time!
                    </Typography>

                    <FormatQuoteIcon
                        sx={{
                            fontSize: 30,
                            color: '#555',
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            transform: 'rotate(180deg)',
                        }}
                    />
                </CardContent>

                {/* Bottom Section */}
                <CardActions
                    sx={{
                        backgroundColor: '#1a1a1a',
                        px: 4,
                        py: 2,
                        display: 'flex',
                        alignItems: 'center',
                        borderTop: '1px solid #333',
                    }}
                >
                  
                    <Box sx={{ color: '#F4BF37', display: 'flex', gap: 0.5 }}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <StarIcon key={idx} fontSize="small" />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            width: '2px',
                            height: 20,
                            backgroundColor: '#F4BF37',
                            mx: 2,
                        }}
                    />

                    <Typography variant="subtitle1" fontWeight="bold">
                        Mike Johnson
                    </Typography>
                </CardActions>
            </Card>
            <Card
                sx={{
                    maxWidth: 400,
                    height:400,
                    backgroundColor: '#121212',
                    color: '#fff',
                    borderRadius: 3,
                    border: '1px solid #333',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Quote Content */}
                <CardContent sx={{ p: 4, position: 'relative' }}>
                    <FormatQuoteIcon sx={{ fontSize: 30, color: '#555' }} />

                    <Typography
                        variant="body1"
                        sx={{ fontStyle: 'italic', fontWeight:"600",fontSize:17, mt: 2, mb: 2, lineHeight: 1.8 }}
                    >
                        As someone who's particular about their haircut, I was nervous trying a new place. The team at PMC took their time to understand what I wanted and delivered exactly that. Will definitely be coming back!
                         </Typography>

                    <FormatQuoteIcon
                        sx={{
                            fontSize: 30,
                            color: '#555',
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            transform: 'rotate(180deg)',
                        }}
                    />
                </CardContent>

                {/* Bottom Section */}
                <CardActions
                    sx={{
                        backgroundColor: '#1a1a1a',
                        px: 4,
                        py: 2,
                        display: 'flex',
                        alignItems: 'center',
                        borderTop: '1px solid #333',
                    }}
                >
                  
                    <Box sx={{ color: '#F4BF37', display: 'flex', gap: 0.5 }}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <StarIcon key={idx} fontSize="small" />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            width: '2px',
                            height: 20,
                            backgroundColor: '#F4BF37',
                            mx: 2,
                        }}
                    />

                    <Typography variant="subtitle1" fontWeight="bold">
                       David Martinez
                    </Typography>
                </CardActions>
            </Card>
            <Card
                sx={{
                    maxWidth: 400,
                    height:400,
                    backgroundColor: '#121212',
                    color: '#fff',
                    borderRadius: 3,
                    border: '1px solid #333',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Quote Content */}
                <CardContent sx={{ p: 4, position: 'relative' }}>
                    <FormatQuoteIcon sx={{ fontSize: 30, color: '#555' }} />

                    <Typography
                        variant="body1"
                        sx={{ fontStyle: 'italic', fontWeight:"600",fontSize:17, mt: 2, mb: 2, lineHeight: 1.8 }}
                    >
                       The hot towel shave experience at PMC Barbershop is phenomenal! It's the perfect blend of old-school barbering with modern techniques. My beard has never looked better.
                       </Typography>

                    <FormatQuoteIcon
                        sx={{
                            fontSize: 30,
                            color: '#555',
                            position: 'absolute',
                            bottom: 16,
                            right: 16,
                            transform: 'rotate(180deg)',
                        }}
                    />
                </CardContent>

                {/* Bottom Section */}
                <CardActions
                    sx={{
                        backgroundColor: '#1a1a1a',
                        px: 4,
                        py: 2,
                        display: 'flex',
                        alignItems: 'center',
                        borderTop: '1px solid #333',
                    }}
                >
                  
                    <Box sx={{ color: '#F4BF37', display: 'flex', gap: 0.5 }}>
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <StarIcon key={idx} fontSize="small" />
                        ))}
                    </Box>

                    <Box
                        sx={{
                            width: '2px',
                            height: 20,
                            backgroundColor: '#F4BF37',
                            mx: 2,
                        }}
                    />

                    <Typography variant="subtitle1" fontWeight="bold">
                     Chris Taylor
                    </Typography>
                </CardActions>
            </Card>
        </Box>

        </Box>
    )
}

export default Testimonials
