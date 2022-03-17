import React from 'react';
import { useTheme } from '@mui/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HistoryIcon from '@material-ui/icons/History';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';

export function RolesDrawer(props) {
  const { drawer, drawerPaper, drawerHeader, link, icon } = useStyles();
  const { handleDrawerClose, open, variant } = props;
  const theme = useTheme();
  const menuArr =
    variant === 'my-roles'
      ? [
          {
            name: 'Back',
            icon: <ChevronLeft />,
            link: '/app/dashboard',
          },
          {
            name: 'History',
            icon: <HistoryIcon />,
            link: '/roles/history',
          },
        ]
      : variant === 'history'
      ? [
          {
            name: 'Back',
            icon: <ChevronLeft />,
            link: '/roles/my-roles',
          },
        ]
      : [
          {
            name: 'Games',
            icon: <ChevronLeft />,
            link: '/app/games',
          },
        ];
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
        {menuArr.map((text, index) => (
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
