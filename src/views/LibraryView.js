import React from 'react'
import { Box } from '@mui/material'
import BookCard from '../components/Book'

export default function LibraryView() {
    return (
        <Box sx={{maxWidth: 1200, mx:'auto'}}>
          <div>
            <hr></hr>
            <h1 style={{textAlign: 'center'}}>BANANA'S BOOKSHELF</h1>
            <hr></hr>
          </div>
          <BookCard/>
        </Box>
    
      )
}
