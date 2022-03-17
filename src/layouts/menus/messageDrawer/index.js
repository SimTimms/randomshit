import React from 'react';
import { useTheme } from '@mui/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';

export function MessageDrawer(props) {
  const { drawer, drawerPaper, drawerHeader, link, icon } = useStyles();
  const { handleDrawerClose, open } = props;
  const theme = useTheme();

  return (
    <Drawer
      className={drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {[
          {
            name: 'Back',
            icon: <ChevronLeft />,
            link: '/app/conversations',
          },
        ].map((text, index) => (
          <Link to={text.link} className={link} key={text.name}>
            <ListItem button>
              <ListItemIcon className={icon}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
