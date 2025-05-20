import AccordionList from './HomeUtils/AccordionList'
import React from 'react'
import SectionHeader from './SectionHeader'
import { Box, Typography } from '@mui/material'

const CommonQuestions = () => {
  return (
    <Box p={20}>
        <SectionHeader upperText={"Common Questions"} text={"Frequently Asked Questions"}/>
         <Box sx={{ mb: 4, textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle1" fontSize={17} color='oklch(.552 .016 285.938)'>
Answers to common questions about our barbershop services.


                </Typography>
            </Box>
      <AccordionList/>
    </Box>
  )
}

export default CommonQuestions
