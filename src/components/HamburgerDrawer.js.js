import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import "./Drawer.css";
import categories from './data';


export default function SwipeableTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        <ListItemIcon>
        </ListItemIcon>

        <Button className='eng'>English</Button>
        <Button >हिन्दी</Button>
        <Divider />

          <ListItem>
            <Divider />
            <p className='categ'> Categories </p>
          </ListItem>
      </List>
      <Divider />

      <List>
        {categories.map((text, index) => (
          <ListItem 
          onClick={() => setCategory(text)} 
          key={text} 
          disablePadding>
            
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
  
        <React.Fragment key={'left'}>

          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon className='menuIcon'/>
          </Button>

          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            { list('left') }
            
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}