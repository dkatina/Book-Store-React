import React from 'react'
import FormOutline from '../components/FormOutline'
import Register from '../forms/Register'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function RegisterView() {
  const {user} = useContext(AppContext)
  return (
    <FormOutline>
        <Register/>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        {user?'':
        <p>Already have an account? Login <Link to='/login'>here</Link></p>}
        
        </Box>
    </FormOutline>
  )
}

