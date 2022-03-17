import React from 'react';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { useStyles } from './styles';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: 'none',
    color: '#aaa',
    height: 38,
    margin: 5,
    padding: '0 20px',
  },
})(Button);

const StyledButtonFooter = withStyles({
  root: {
    background: 'none',
    color: 'rgba(255,255,255,0.4)',
    height: 28,
    margin: 5,
    padding: '0 ',
    fontSize: 12,
    fontWeight: 400,
  },
})(Button);

export function AppMenu({ handleDrawerOpen, open, history }) {
  const classes = useStyles();

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => {
        handleDrawerOpen();
      }}
      edge="start"
      className={clsx(classes.menuButton, open && classes.hide)}
    ></IconButton>
  );
}

export function PublicMenu({ history }) {
  const authToken = Cookies.get('token');
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      className={`${clsx({
        [classes.menuWrapper]: true,
        [classes.menuWrapperMobile]: mobile,
      })}`}
    >
      {authToken && (
        <StyledButton
          onClick={() => {
            history.push(`/app/dashboard`);
          }}
        >
          Dashboard
        </StyledButton>
      )}
      {authToken ? (
        <StyledButton
          onClick={() => {
            Cookies.remove('token');
            Cookies.remove('userId');
            localStorage.removeItem('featureArticle');
            localStorage.removeItem('posts');
            history.push(`/`);
          }}
        >
          Logout
        </StyledButton>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <StyledButton>Login</StyledButton>
        </Link>
      )}
    </div>
  );
}

export function PublicFooterMenu() {
  const classes = useStyles();
  return <div className={classes.menuWrapperMobile}></div>;
}
