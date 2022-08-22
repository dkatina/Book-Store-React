import { Box } from '@mui/material'
import React from 'react'
import ReadingList from '../components/ReadingList'

export default function ReadingListView() {
  return (
    <Box sx={{maxWidth: '1000px', mx:'auto'}}>
    <ReadingList/>
    </Box>
  )
}
