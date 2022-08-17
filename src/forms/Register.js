import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'
import  Box  from '@mui/material/Box'

//Doubles as Edit/Delete Form when offered a User

const FormSchema = Yup.object(
    {
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required(),
        confirm_password: Yup.string().required()
    }
)


// let this_user = {
//     first_name: 'Dylan',
//     last_name: 'Katina',
//     email: 'dk@email',
//     password: '12345'
// }

export default function LoginForm({user}) {
    const initialValues={
        first_name:user?.first_name ?? '',
        last_name: user?.last_name ?? '',
        email: user?.email ?? '',
        password:'',
        confirm_password: '',
    }
    const handleSubmit=(values)=>{
        console.log(values)
    }

    const handleDelete=()=>{
        console.log('Deleting User: ', user.first_name)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })
    


  return (
    <form onSubmit={formik.handleSubmit}>
        <Box sx={{display: 'flex', gap: 3}}>
            <TextField
                id ="first_name"
                name="first_name"
                fullWidth
                sx={{my: 1}}
                label="First Name"
                placeholder="First Name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error = {formik.touched.first_name && Boolean(formik.errors.first_name)}
                helperText={formik.touched.first_name && formik.errors.first_name}
                color='info'
            />
            <TextField
                id ="last_name"
                name="last_name"
                fullWidth
                sx={{my: 1}}
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error = {formik.touched.last_name && Boolean(formik.errors.last_name)}
                helperText={formik.touched.last_name && formik.errors.last_name}
                color='info'
            />
        </Box>
        <TextField
            id ="email"
            name="email"
            fullWidth
            sx={{my: 1}}
            label="Email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error = {formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            color='info'
        />
        <TextField
            id ="password"
            name="password"
            type="password"
            fullWidth
            sx={{my: 1}}
            label="Password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error = {formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            color='info'
        />
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
         {user?
            <Button onClick={()=>handleDelete()} color='secondary' sx={{maxWidth:"600px", width:'100%', mb: 1,mx: 'auto'}}>Delete</Button>
            :<TextField
            id ="confirm_password"
            name="confirm_password"
            type="confirm_password"
            fullWidth
            sx={{my: 1}}
            label="Confirm Password"
            placeholder="Confirm Password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            error = {formik.touched.confirm_password && Boolean(formik.errors.confirm_password)}
            helperText={formik.touched.confirm_password && formik.errors.confirm_password}
            color='info'
        />
        }
        <Button type="submit" sx={{ maxWidth:"600px", width:'100%', mx: 'auto'}}>{user? 'Edit Account':'Register'}</Button>
        </Box>
    </form>
  )
}