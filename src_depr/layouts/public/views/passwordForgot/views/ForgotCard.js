import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Divider,
  CardContent,
  Typography,
  useMediaQuery,
  Button,
  Slide,
} from '@material-ui/core';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import { Mutation } from 'react-apollo';
import { PASSWORD_FORGOT_MUTATION } from '../../../../../data/authorisation';
import { PROFILE_EMAIL } from '../../../../../utils/dataLengths';
import {
  ErrorBox,
  Form,
  FieldBox,
  Column,
  MenuButtonStandard,
  MenuButtonStandardText,
} from '../../../../../components';
import { validate } from 'email-validator';
import clsx from 'clsx';

export default function ForgotCard({ history, setPage }) {
  const classes = { ...styles(), ...sharedStyles() };
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    email: null,
  });
  const mobile = useMediaQuery('(max-width:800px)');

  function submitChecks(SignupMutation) {
    let passed = true;

    const emailPass = validate(email);
    !emailPass && (passed = false);

    setError({
      email: !emailPass ? 'Valid email require' : null,
    });

    passed && SignupMutation();
  }

  return (
    <Column>
      <CardContent style={{ padding: 5 }}>
        <Typography
          variant="h5"
          color="textPrimary"
          style={{ textAlign: 'center', color: '#fff' }}
        >
          Forgot your password?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          style={{ textAlign: 'center' }}
          className={classes.description}
        >
          Enter your email address and we'll send you a reset link
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.cardContentCenter}>
        <Form width={200}>
          <FieldBox
            value={email}
            title="Email Address"
            maxLength={226}
            onChangeEvent={(e) => {
              setEmail(e);
            }}
            replaceMode={null}
            placeholder="something@email.com"
            info="The email address you used to register with MiniPainter3d"
            warning=""
            size="s"
            multiline={false}
          />
          <ErrorBox errorMsg={errors.email} />
        </Form>
      </CardContent>
      <CardContent className={classes.cardContentCenter}>
        <Mutation
          mutation={PASSWORD_FORGOT_MUTATION}
          variables={{ email }}
          onCompleted={async (data) => {
            setPage(1);
          }}
          onError={(error) => {
            setPage(1);
          }}
        >
          {(passwordForgotMutation) => {
            return (
              <MenuButtonStandard
                title="Reset Password"
                onClickEvent={() => {
                  submitChecks(passwordForgotMutation);
                }}
              />
            );
          }}
        </Mutation>
      </CardContent>
      <Divider />
      <CardContent
        style={{
          paddingBottom: 70,
          display: 'flex',
          flexDirection: 'column',
        }}
        className={classes.cardContentCenter}
      >
        <Link to="/login">
          <MenuButtonStandardText title="Login " onClickEvent={() => null} />
        </Link>
      </CardContent>
    </Column>
  );
}
