import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



const a_book={
    author: 'Arlene Dahl',
    created_on: 'Mon, 28 Feb 2022 19:21:17 GMT',
    id: 18, 
    img: 'https://s2982.pcdn.co/wp-content/uploads/2018/11/always-ask-a-man-book-cover.jpg',
    pages: 198, 'subject': 'self help',
    summary: 'For women traveling back to the US 1950',
    title: 'ALWAYS ASK A MAN: THE KEY TO FEMININITY'
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function RecipeReviewCard({book = a_book}) {
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
      <Card sx={{ maxWidth: 345 }} >
        <CardHeader
          title={book.title}
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
          <IconButton aria-label="add to cart">
            <FavoriteIcon color='secondary'/>
          </IconButton>
          <IconButton aria-label="add to library">
            <AddShoppingCartIcon color='secondary'/>
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{book.summary}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }