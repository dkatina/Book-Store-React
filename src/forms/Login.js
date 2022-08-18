import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'
import Error from '../components/Error'
import useLogin from '../hooks/useLogin'


const FormSchema = Yup.object({
    email: Yup.string().email('Must Be a Valid Email').required(),
    password: Yup.string().required()
})



const initialValues={
        email:'',
        password:''
    }


export default function Login() {
    

    const [loginInfo, setLoginInfo]=useState({})
    const [error, setError]=useState('')

    useLogin(loginInfo, setLoginInfo, setError)

    const handleSubmit=(values)=>{
        console.log(values)
        setLoginInfo(values)
    }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    }

    )

  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id='email'
            name='email'
            label='Email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error = {formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            color='info'
            fullWidth
            sx={{my: 1}}
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
        <Button type='submit' sx={{maxWidth:'600px', width:'100%', mx: 'auto', display: 'block'}}>Login</Button>
        <Error>{error}</Error>
    </form>
  )
}
