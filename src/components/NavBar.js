import * as React from 'react';
import { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const stuff = [
  {text:'Account', path:'/edit', icon:AccountCircleIcon},
  {text:'My Reading List', path:'/reading_list', icon:MenuBookTwoToneIcon},
]


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function NavBar({children}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {user, setUser} = useContext(AppContext)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setUser('')
    setOpen(false);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Link to='/' style={{textDecoration:'none', flexGrow: 1}}>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" color='secondary'>
              Banana's Bookshelf
            </Typography>
          </Link>
          <Link to='/library' style={{textDecoration: 'none'}}>
          <Typography variant='p' color='secondary' sx={{mr: 2}}>
              Library
            </Typography>
          </Link>
          {!user ? 
          <Link to='/register' style={{textDecoration:'none'}}>
            <Typography variant='p' color='secondary'>
              login/register
            </Typography>
          </Link>: <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>}
          
         
          
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader/>
        {children}
      </Main>
      <Drawer
        sx={{
          color:'secondary',
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
        color='secondary'
      >
      <Box sx={{backgroundColor: theme.palette.secondary.main, flexGrow: 1}}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Typography color='primary'>Menu</Typography>
        </DrawerHeader>
        <Divider color='white'/>
        <List>
          {stuff.map((item) => (
            <ListItem key={item.text} disablePadding>
              
                <ListItemButton>
                  <Link to={item.path} style={{textDecoration:'none', display:'flex'}}>
                  <ListItemIcon sx={{mt:.5}}>
                    {<item.icon color='primary'/>}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{color:'white'}}/>
                  </Link>
                </ListItemButton>
              
            </ListItem>
          ))}
          <ListItem key='logout' disablePadding>
              
              <ListItemButton onClick={()=>handleLogout()}>
                <Link to='/' style={{textDecoration:'none', display:'flex'}}>
                <ListItemIcon sx={{mt:.5}}>
                  <LogoutIcon color='primary'/>
                </ListItemIcon>
                <ListItemText primary='Logout' sx={{color:'white'}}/>
                </Link>
              </ListItemButton>
            
          </ListItem>
        </List>
      </Box>
      </Drawer>
    </Box>
  );
}
