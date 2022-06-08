import React from 'react';
import LoginPage from './views/LoginPage';
import Registry from './views/register';
import { Content } from '../../components';
import { StyledNavBar, Footer } from '../../components';
import { PublicFooterMenu } from '../menus';
import { PasswordForgot } from './views/passwordForgot';
import { PasswordReset } from './views/passwordReset';
import Deleted from './views/deleted';
import { useStyles } from './styles';
import mp3d from '../../assets/branding/mp3d.png';
import { REACT_APP_COMPANY_PUBLIC_NAME } from '../../envVars';
import mp3dLogo from '../../assets/branding/mp3dlogoinsta.png';

export function PublicLayout(props) {
  const [page, setPage] = React.useState('home');
  const classes = useStyles();

  const pageJump = props.match ? props.match.params.page : null;
  const token = props
    ? props.match
      ? props.match.params.token
        ? props.match.params.token
        : null
      : null
    : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  return (
    <div>
      <Content>
        {page === 'login' ? (
          <LoginPage history={props.history} forwardTo={null} />
        ) : page === 'register' ? (
          <Registry campaignId={token} history={props.history} />
        ) : page === 'password-forgot' ? (
          <div className={classes.backgroundSignup}>
            <PasswordForgot history={props.history} />
          </div>
        ) : page === 'password-reset' ? (
          <div className={classes.backgroundSignup}>
            <PasswordReset history={props.history} token={token} />
          </div>
        ) : page === 'deleted' ? (
          <div className={classes.backgroundSignup}>
            <Deleted />
          </div>
        ) : (
          <LoginPage history={props.history} forwardTo={props.location} />
        )}
      </Content>
    </div>
  );
}
