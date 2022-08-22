import { Box, Typography } from '@mui/material'
import React from 'react'
import BookCard from '../components/Book'

export default function HomePageView() {
  return (
    <Box sx={{maxWidth: 1200, mx:'auto'}}>
      <Typography variant='h3' sx={{textAlign: 'center', pb: 4, pt:4,height: '20vh', backgroundImage: 'url(https://res.cloudinary.com/dc0hokgpp/image/upload/v1661179450/H2e6f37d2b9c84362a1a690b77ca6e945n_u6eaoe.jpg)'}} color='primary'>
          Welcome To the Shop!
      </Typography>
        
      <BookCard/>
      
        
    </Box>

  )
}
