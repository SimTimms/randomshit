import React from 'react';
import { Typography } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  DividerMini,
  MenuButtonStandardText,
} from '../../../../components';
import { sharedStyles } from '../styles';
import { MutationLogin } from '../../../../data/mutationComponents';

const CHECKING = 'Checking...';

export default function LoginPage({ history, forwardTo }) {
  const classes = sharedStyles();
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
    <div className={classes.pageWrapper}>
      <CardComponent
        styleOverride={{
          width: 400,
        }}
      >
        <Column>
          <Typography variant="h5">Welcome</Typography>
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
              title="Forgot your password?"
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
    </div>
  );
}
