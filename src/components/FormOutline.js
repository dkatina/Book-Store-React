import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function FormOutline({children}) {
  return (
    <Container maxWidth="md">
        <Box sx={{height: '80vh', borderRadius: 3, border: 1, borderColor:'info', padding: 2 }}>
          {children}
        </Box>
      </Container>
      
    
  )
}
