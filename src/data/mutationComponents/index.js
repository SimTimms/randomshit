import React from 'react';
import { Mutation } from 'react-apollo';
import {
  MenuButtonStandard,
  Column,
  DividerMini,
  FieldBox,
} from '../../components';
import * as AUTH from '../authorisation';
import Cookies from 'js-cookie';
import { readableErrors } from '../../utils/readableErrors';
import jwtDecode from 'jwt-decode';
import { useStyles } from './styles';

export const MutationLogin = ({ parameters }) => {
  const classes = useStyles();
  const [loginStatus, setStatus] = React.useState('Login');
  const CHECKING = 'Checking...';

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

  const { email, password, history, setError, errors, setEmail, setPassword } =
    parameters;
  return (
    <Mutation
      mutation={AUTH.LOGIN_MUTATION}
      variables={{ email, password }}
      onCompleted={async (data) => {
        const { token } = data.userLogin;
        if (token) {
          const tokenDecode = jwtDecode(token);
          await Cookies.set('token', token, { expires: 7 });
          await Cookies.set('userId', tokenDecode.userId, {
            expires: 7,
          });

          history.replace('/app/home');
        }
      }}
      onError={(error) => {
        setStatus(`Try Again`);
        setError(readableErrors(error, errors));
      }}
    >
      {(LoginMutation) => {
        return (
          <Column w={200}>
            <FieldBox
              value={email}
              title="Email Address"
              onChangeEvent={(e) => {
                setEmail(e);
              }}
              replaceMode={null}
              placeholder="something@email.com"
              info=""
              warning=""
              size="s"
              multiline={false}
            />
            <DividerMini />
            <FieldBox
              value={password}
              title="Password"
              onChangeEvent={(e) => {
                setPassword(e);
              }}
              replaceMode={null}
              placeholder="*****"
              info=""
              warning=""
              size="s"
              multiline={false}
              type="password"
            />
            <DividerMini />
            <MenuButtonStandard
              title={loginStatus}
              onClickEvent={() => {
                loginSubmit(LoginMutation);
              }}
            />
          </Column>
        );
      }}
    </Mutation>
  );
};
