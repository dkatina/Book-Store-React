import React from 'react' 
import { motion } from 'framer-motion'
import { TextField } from '@mui/material'


export default function HomePageView() {
  return (
    <div className='homediv' style={{marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <header className='header'>
        <div className='textHolder'><h1 className='logo'>BANANA'S</h1></div>
        
        <img className='banana' src="https://res.cloudinary.com/dc0hokgpp/image/upload/v1665423520/Banana_kgseur.png" alt="banana_logo"></img>
        <div className='textHolder'><h1 className='logo'>BOOKSHELF</h1></div>
      </header>
      <div className='body' style={{display: 'flex', justifyContent: 'center'}}>
        <motion.div className='Welcome' 
        animate={{x: 0, scale: 1}} 
        initial={{x: -1000, scale: 0}}
        transition={{delay: .5, x: {duration: 1}, scale: {duration: 1}}}>
          <h3>Welcome</h3>
          <p>Thank you for visiting Banana's Bookshelf, we hope you enjoy this 
            fine selection of books brough to you by our in house curator, 
            Rhiannon <i>"Banana"</i> Katina.
            </p>
          <p>If you'd like to be kept up to date on Banana's latest find's feel 
            free to subscribe to our newsletter by adding your email below</p>
            <TextField
            id ="email"
            name="email"
            fullWidth
            sx={{my: 1}}
            label="Email"
            placeholder="Email"
            color='info'
        />
        </motion.div>
        <motion.div className='About'
        animate={{x: 0, scale: 1}} 
        initial={{x: 1000, scale: 0}}
        transition={{delay: .5,
          x: {duration: 1},
          scale: {duration: 1}}}>
          <h3>About The Curator</h3>
          <motion.img className='Rhia'
           src='https://res.cloudinary.com/dc0hokgpp/image/upload/v1665443958/Rhia_bya4ez.jpg'
            alt='rhia'
            animate={{scale: 1}} 
            initial={{scale: 0}}>
            </motion.img>
          <p>Rhiannon <i>"Banana" </i>Katina born September 10, 2016 comes from
          humble beginnings in the southern regions of Georgia. She spent her early 
          years being worked to the bone on the farm until one day she worked up the
           courage to leave. She wondered from town to town until she finally found 
          sanctuary not in a place... but in a person. A blonde-haired green-eyed 
          Southern Belle named Gracie took her in, and they've been inseperable ever since.
          </p>
          <p>Under a new roof Rhia grew an appreciation for fine literature, and 
          her eye for a good novel has been said to be uncomparable.</p>
        </motion.div>
      </div> 
    </div>

  )
}
