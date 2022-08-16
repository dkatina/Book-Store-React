import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { InputFormProp, EmailFormProp, PasswordFormProp, ConfirmPasswordProp } from './FormPrompts'
import { Typography } from '@mui/material';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function RegistrationForm() {
  return (
    <Box sx={{ width: '75%', mx: 'auto'}}>
        <Typography variant="h6" component="div" color='warning'>Register</Typography>
      <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <InputFormProp>First Name</InputFormProp>
        </Grid>
        <Grid item xs={6}>
        <InputFormProp>Last Name</InputFormProp>
        </Grid>
        <Grid item xs={12}>
            <EmailFormProp/>
        </Grid>
        <Grid item xs={6}>
          <PasswordFormProp/>
        </Grid>
        <Grid item xs={6}>
          <ConfirmPasswordProp/>  
        </Grid>
      </Grid>
    </Box>
  );
}
