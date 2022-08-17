import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField'
import Button from '../components/Button'
// import Autocomplete from '@mui/material/Autocomplete'


const FormSchema = Yup.object({
    title: Yup.string().required()
})

// const books= [
//     {title: 'Harry Potter'},
//     {title: 'Green Lights'},
//     {title: 'Django Unchained'},
//     {title: 'Lightning Thief'},
// ]


export default function FindBook() {
    const initialValues = {
        title:''
    }

    const handleSubmit=(values)=>{
        console.log(values)
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: FormSchema,
        onSubmit: (values)=> handleSubmit(values)
    })


  return (
    <form onSubmit={formik.handleSubmit}>
        <TextField
            id='title'
            name='title'
            lable='Book Title'
            placeholder='Search Book By Title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error = {formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            color='info'
            fullWidth
            sx={{my: 1}}
        />
        {/* <Autocomplete
        freeSolo
        id='name'
        name='name'
        lable='Book Title'
        placeholder='Search Book By Title'
        value={formik.values.name}
        onChange={formik.handleChange}
        // error = {formik.touched.name && Boolean(formik.errors.name)}
        // helperText={formik.touched.name && formik.errors.name}
        color='info'
        fullWidth
        sx={{my: 1}}
        
        // disableClearable
        options={books.map((option) => option.name)}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Search Book by Title"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      /> */}
      <Button type='submit' sx={{maxWidth:'600px', width:'100%', mx: 'auto', display: 'block'}}>Find Book</Button>
        

    </form>
  )
}



