import React from 'react';
import { Typography } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  DividerMini,
  MenuButtonStandardText,
  Row,
} from '../../../../components';
import { sharedStyles } from '../styles';
import { MutationLogin } from '../../../../data/mutationComponents';
import RegisterCard from '../register/views/RegisterCard';

export default function LoginPage({ history, forwardTo }) {
  const classes = sharedStyles();
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });

  return (
    <div className={classes.pageWrapper}>
      <CardComponent
        styleOverride={{
          width: 500,
          marginTop: 30,
        }}
      >
        <Column>
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
            </Column>
          </Column>
          <Column>
            <RegisterCard />
          </Column>
        </Column>
      </CardComponent>
    </div>
  );
}
