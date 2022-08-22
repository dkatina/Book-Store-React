import { Box, Typography } from '@mui/material'
import React from 'react'
import BookCard from '../components/Book'

export default function HomePageView() {
  return (
    <Box>
      <Typography variant='h3' sx={{textAlign: 'center', mb:4}} color='secondary'>
          Welcome To the Shop!
      </Typography>
        
      <BookCard/>
      
        
    </Box>

  )
}
