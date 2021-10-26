import React from 'react';
import LoginPage from '../../pages/loginPage';
import Registry from '../../pages/registerPage';
import PasswordForgot from '../../pages/passwordForgotPage';
import PasswordReset from '../../pages/passwordResetPage';
import { Content } from '../../../components';
import { StyledNavBar } from '../../../components';
import mp3d from '../../../../assets/branding/mp3d.png';

export default function PublicLayout(props) {
  const [page, setPage] = React.useState('home');

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
      <StyledNavBar
        open={false}
        history={props.history}
        theme={props.theme}
        center={true}
        sidebarMissing={true}
      >
        <img
          src={mp3d}
          style={{ maxHeight: 40 }}
          alt={`${process.env.REACT_APP_COMPANY_PUBLIC_NAME} Logo`}
        />
      </StyledNavBar>
      <Content>
        {page === 'login' ? (
          <LoginPage history={props.history} forwardTo={null} />
        ) : page === 'register' ? (
          <Registry campaignId={token} history={props.history} />
        ) : page === 'password-forgot' ? (
          <PasswordForgot history={props.history} />
        ) : page === 'password-reset' ? (
          <PasswordReset history={props.history} token={token} />
        ) : (
          <LoginPage history={props.history} forwardTo={props.location} />
        )}
      </Content>
    </div>
  );
}
