import React from 'react';
import { Typography } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  DividerMini,
  MenuButtonStandardText,
} from '../../../../components';
import { MutationLogin } from '../../../../data/mutationComponents';

const CHECKING = 'Checking...';

export default function LoginPage({ history, forwardTo }) {
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });
  const [loginStatus, setStatus] = React.useState('Login');

  function loginSubmit(LoginMutation) {
    if (password === '' || email === '') {
      setStatus('Try Again');
      return;
    }

    if (loginStatus !== CHECKING) {
      setStatus('Checking...');
      LoginMutation();
    }
  }

  return (
    <CardComponent
      styleOverride={{
        width: 400,
      }}
    >
      <Column>
        <Typography variant="h5" style={{ color: '#fff' }}>
          Welcome
        </Typography>
        <Typography>Please login</Typography>
        <Divider />
      </Column>
      <Column>
        <MutationLogin
          parameters={{
            email,
            password,
            forwardTo,
            history,
            setStatus,
            setError,
            errors,
            setEmail,
            loginSubmit,
            setPassword,
            loginStatus,
          }}
        />
        <Column w={200}>
          <DividerMini />
          <MenuButtonStandardText
            title="Forgotten your password?"
            onClickEvent={() => history.push('/password-forgot')}
          />

          <DividerMini />
          <MenuButtonStandardText
            title="Register"
            onClickEvent={() => history.push('/register')}
          />
        </Column>
      </Column>
      <Divider />
    </CardComponent>
  );
}
