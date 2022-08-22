import * as React from 'react';
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { AppContext } from '../context/AppContext';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from './Button'


export default function ReadingList() {
  const theme = useTheme();
  const {readingList, removeFromList, clearList, moveUp, moveDown} = useContext(AppContext)
  return (
    <>
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2}}>
        <Typography variant='h6' color='secondary'>
            Reading List
        </Typography>
        <Button onClick={()=>{clearList()}}>Clear</Button>
    </Box>    
    {readingList.map((book)=>(
        <Card sx={{ display: 'flex', justifyContent: 'space-between', mb: 2}} key={book.id}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {book.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {book.author}
                </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="remove from list" onClick={()=>{removeFromList(book)}}>
                    <PlaylistRemoveIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                {readingList.indexOf(book)>0?
                <IconButton aria-label="move up" onClick={()=>{moveUp(book)}}>
                    <KeyboardArrowUpIcon sx={{ height: 38, width: 38 }} />
                </IconButton>:''}
                {readingList.indexOf(book) < readingList.length -1?
                <IconButton aria-label="move down" onClick={()=>{moveDown(book)}}>
                    <KeyboardArrowDownIcon sx={{ height: 38, width: 38 }} />
                </IconButton>:''}
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={book.img}
                alt="Live from space album cover"
            />
        </Card>
    ))}
    </>
  );
}
