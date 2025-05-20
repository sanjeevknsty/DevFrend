import React from 'react'
import { Box, Typography } from '@mui/material';

const CardSectionHeader = ({ lowerText, text }) => {
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
                '&:hover .upper': {
                    transform: 'translateY(-5px)',

                }
            }}>



                <Box
                    sx={{
                        display: 'inline-block',
                        position: 'relative',

                    }}
                >
                    <Box
                        className="bottom-line"
                        sx={{
                            position: 'absolute',
                            bottom: 50,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '4px',
                            width: '40%',
                            backgroundColor: '#F4BF37',
                            transition: 'width 0.4s ease',
                        }}
                    />

                    <Typography variant="h6" sx={{ fontWeight: "900", color: "#ffffff" }}>{text}</Typography>

                </Box>
                <Typography className="upper" variant="h6" sx={{
                    color: '#F4BF37',
                    // mb: 1,
                    fontSize:"12px",
                    transition: 'transform 0.3s ease',

                }}>
                    {lowerText}
                </Typography>


            </Box>
        </Box>
    )
}

export default CardSectionHeader
