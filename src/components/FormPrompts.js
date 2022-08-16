import * as React from 'react';
import TextField from '@mui/material/TextField';


export function InputFormProp({children}){
  return(
    <TextField
    color="secondary"
    required
    id="outlined-required"
    label= {children}
    placeholder= {children}
    sx={{width: 1/1}}
  />
  )
}

export function EmailFormProp(){
  return(
    <TextField
    color="secondary"
    required
    id="outlined-required"
    type="email"
    label="Email"
    placeholder="Email"
    sx={{width: 1/1}}
  />
  )
}

export function PasswordFormProp(){
  return(
    <TextField
    color='secondary'
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    placeholder='password'
    sx={{width: 1/1}}
  />
  )
}

export function ConfirmPasswordProp(){
  return(
    <TextField
    color='secondary'
    id="outlined-password-input"
    label="Confirm Password"
    type="password"
    autoComplete="current-password"
    placeholder='Confirm Password'
    sx={{width: 1/1}}
  />
  )
}