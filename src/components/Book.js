import * as React from 'react';
import {useContext} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useGetAllBooks from '../hooks/useGetAllBooks'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { AppContext } from '../context/AppContext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'


  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


export default function BookCard({book}) {
    const {books} = useGetAllBooks()
    const [expandedId, setExpandedId] = React.useState(-1);
    const { addToList, readingList, user } = useContext(AppContext)

    const navigate = useNavigate()
    
    const handleExpandClick = (i) => {
      setExpandedId(expandedId === i? -1 : i);
    };

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.5
        }
      }
    }
    
    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
      
    }
  
    return (
      <motion.div variants={container} initial="hidden" animate="show"
      style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {books?.books.map((book, i)=>(
      <motion.div variants={item} 
                  initial="hidden" 
                  aniamte="show" key={book.id}
                  transition={{duration: 0.5, delay: i * .1}}
                  whileHover={{scale:1.02,
                              transition: {duration: .1, delay: 0}}}>
      <Card key={book.id} sx={{ width: 320, m: 3}}>
        <CardHeader
          subheader={book.title}
          fontSize='10'
          sx={{minHeight: 100, textAlign: 'center', color: 'black'}}

        />
        <CardMedia
          component="img"
          height='400'
          image={book.img}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Author: {book.author}<br/>
            Genre: {book.subject}<br/>
            Pages: {book.pages}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            {user ? 
            (readingList.filter(thisBook => thisBook.id === book.id)).length >= 1 ?
              <IconButton aria-label="add to library">
                <DownloadDoneIcon color='secondary'/>
              </IconButton>:<IconButton aria-label="add to reading list" onClick={()=>{addToList(book)}}>
                <AddCircleOutlineIcon color='secondary'/>
              </IconButton>: 
              ''}
            <IconButton aria-label="Info" onClick={()=>navigate(`/books/${book.id}`)}>
              <VisibilityIcon color='info'/>
            </IconButton>
              
            
          
            <ExpandMore
            expand={expandedId === books.books.indexOf(book)}
            onClick={() => handleExpandClick(books.books.indexOf(book))}
            aria-expanded={expandedId === books.books.indexOf(book)}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandedId === books.books.indexOf(book)} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{book.summary}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      </motion.div>
      ))}
      </motion.div>
    );
  }