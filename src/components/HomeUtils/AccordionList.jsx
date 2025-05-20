import React, { useState } from 'react';
import {
  Box, Typography, Accordion, AccordionSummary,
  AccordionDetails, TextField, Chip, Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const questions = [
  {
    question: "Do I need an appointment or can I walk in?",
    answer: "We welcome both appointments and walk-ins. However, we recommend booking in advance to ensure your preferred time slot, especially on weekends. You can book through our website, by phone, or via WhatsApp",
    category: "General",
  },
  {
    question: "How long does a typical haircut take?",
    answer:
      "A standard men's haircut takes approximately 30-45 minutes. Services like beard trims add 15-20 minutes, while premium services like hot towel shaves may take up to an hour. We take our time to ensure quality results.",
    category: "Services",
  },
  {
    question: "What form of payment do you accept?",
    answer: "We accept cash, all major credit/debit cards, Apple Pay, Google Pay, and Venmo for your convenience.",
    category: "Pricing",
  },
  {
    question: "Do you offer any loyalty programs or discounts?",
    answer: "Yes, we offer a loyalty program where your 10th haircut is free. We also offer discounts for military personnel, first responders, seniors, and students with valid ID.",
    category: "Support",
  },
  {
    question: "What hair products do you use and sell?",
    answer: "We use and sell premium men's grooming products from brands like Uppercut Deluxe, Layrite, and American Crew. Our barbers can recommend the best products for your hair type and style.",
    category: "Services",
  },
];

const categories = ["All Questions", "General", "Services", "Pricing", "Support"];


const AccordionList = () => {
    
     const [selectedCategory, setSelectedCategory] = useState("All Questions");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuestions = questions.filter((q) => {
    const matchesCategory =
      selectedCategory === "All Questions" || q.category === selectedCategory;
    const matchesSearch =
      q.question.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
   <Box sx={{ px: 4, py: 6, maxWidth: 800, mx: 'auto' }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for questions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          mb: 3,
          input: { color: '#fff' },
          fieldset: { borderColor: '#444' },
          '&:hover fieldset': { borderColor: '#888' },
          bgcolor: '#121212',
        }}
        InputProps={{
          style: {
            borderRadius: '24px',
            paddingLeft: '10px',
          },
        }}
      />

      <Stack direction="row" spacing={1} mb={3} flexWrap="wrap">
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => setSelectedCategory(cat)}
            variant={selectedCategory === cat ? 'filled' : 'outlined'}
            color={selectedCategory === cat ? 'warning' : 'default'}
            sx={{
              borderRadius: '20px',
              fontWeight: 500,
              color: selectedCategory === cat ? '#000' : '#fff',
              borderColor: selectedCategory === cat ? 'transparent' : '#555',
            }}
          />
        ))}
      </Stack>

      {filteredQuestions.map((item, index) => (
        <Accordion
          key={index}
          sx={{
            bgcolor: '#1e1e1e',
            color: '#fff',
            mb: 1,
            borderRadius: 2,
            border: '1px solid #333',
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography fontWeight="bold">{item.question}</Typography>
          </AccordionSummary>
          {item.answer && (
            <AccordionDetails>
              <Typography variant="body2" color="gray">
                {item.answer}
              </Typography>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </Box>
  )
}

export default AccordionList
