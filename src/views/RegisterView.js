import React from 'react'
import FormOutline from '../components/FormOutline'
import Register from '../forms/Register'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'

export default function RegisterView() {
  return (
    <FormOutline>
        <Register/>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <p>Already have an account? Login <Link to='/login'>here</Link></p>
        
        </Box>
    </FormOutline>
  )
}

