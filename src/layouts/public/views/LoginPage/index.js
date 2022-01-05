import React from 'react';
import { Typography } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  DividerMini,
  MenuButtonStandardText,
  MenuButtonStandard,
  Row,
} from '../../../../components';
import { sharedStyles } from '../styles';
import { MutationLogin } from '../../../../data/mutationComponents';
import RegisterCard from '../register/views/RegisterCard';

export default function LoginPage({ history, forwardTo }) {
  const classes = sharedStyles();
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [loginType, setLoginType] = React.useState(0);
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });
  if (loginType === 0) {
    return (
      <div className={classes.pageWrapper}>
        <CardComponent
          styleOverride={{
            width: 500,
            marginTop: 30,
          }}
        >
          <Column>
            <Column w={200}>
              <a
                href={`${process.env.REACT_APP_URL}/partner/61c5018a32eaca0016363b6c/61d5a0327d31f80016bfa2be`}
              >
                <MenuButtonStandard
                  onClickEvent={() => {
                    setLoginType(1);
                  }}
                  title="Demo"
                  fullWidth={true}
                />
              </a>
              <DividerMini />
              <MenuButtonStandard
                onClickEvent={() => {
                  setLoginType(2);
                }}
                title="Login with Account"
                fullWidth={true}
              />
              <DividerMini />
              <MenuButtonStandard
                onClickEvent={() => {
                  setLoginType(3);
                }}
                title="Register"
                fullWidth={true}
              />
            </Column>
          </Column>
        </CardComponent>
      </div>
    );
  }
  return (
    <div className={classes.pageWrapper}>
      <CardComponent
        styleOverride={{
          width: 500,
          marginTop: 30,
        }}
      >
        <Column>
          <Column w={200}></Column>
          {loginType === 2 && (
            <Column bg="primary">
              <Typography variant="h5" style={{ color: '#fff', marginTop: 5 }}>
                Login
              </Typography>
              <Divider />
              <MutationLogin
                parameters={{
                  email,
                  password,
                  forwardTo,
                  history,
                  setError,
                  errors,
                  setEmail,
                  setPassword,
                }}
              />
              <Column w={200}>
                <DividerMini />
                <MenuButtonStandardText
                  title="Password Reset"
                  onClickEvent={() => history.push('/password-forgot')}
                  white={true}
                />
                <DividerMini />
                <MenuButtonStandardText
                  title="Back"
                  onClickEvent={() => setLoginType(0)}
                  white={true}
                />
                <DividerMini />
              </Column>
            </Column>
          )}
          {loginType === 3 && (
            <Column>
              <RegisterCard />
              <MenuButtonStandardText
                title="Back"
                onClickEvent={() => setLoginType(0)}
              />
            </Column>
          )}
        </Column>
      </CardComponent>
    </div>
  );
}
