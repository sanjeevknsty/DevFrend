import React from 'react'

const Card = (src,Heading,description,keyword1,keyword2) => {
  return (
   <Card sx={{ maxWidth: 345, p: 2, borderRadius: 3, boxShadow: 5 ,backgroundColor:"rgb(34, 34, 34)"}}>
                <CardMedia
                    component="img"
                    sx={{ width: '80px', height: '80px', borderRadius: '10px' }}
                    image="https://via.placeholder.com/80"
                    alt="Sample Image"
                />
                <CardContent>
                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
                        Card Heading
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        This is a short description providing details about the content inside the card. It should be concise and informative.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                        <Typography variant="caption" sx={{ backgroundColor: 'lightgray', px: 1, py: 0.5, borderRadius: 1 }}>
                            Keyword 1
                        </Typography>
                        <Typography variant="caption" sx={{ backgroundColor: 'lightgray', px: 1, py: 0.5, borderRadius: 1 }}>
                            Keyword 2
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
  )
}

export default Card
