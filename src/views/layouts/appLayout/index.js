import React from 'react';
import UpdateProfilePage from '../../pages/updateProfilePage';
import AccountPage from '../../pages/accountPage';
import HomePage from '../../pages/homePage';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { PROFILE } from '../../../data/profile/profile';
import logout from '../../../utils/logout';
import { HistoryContext, MenuContext } from '../../../context';
import PrimaryMenu from '../../../menu/PrimaryMenu';
import { mainMenu } from '../../../menu/menuArray';
import { MainWrapper, ContentScroll } from '../../../components';

export default function AppLayout(props) {
  const { history } = props;
  const [profile, setProfile] = React.useState(null);

  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  return (
    <HistoryContext.Provider value={history}>
      <MenuContext.Consumer>
        {(menuContext) => (
          <MainWrapper>
            <ToastContainer />
            <PrimaryMenu mainMenu={mainMenu} />
            <ContentScroll>
              {menuContext.primaryPage === 'account' ? (
                <AccountPage history={history} />
              ) : menuContext.primaryPage === 'edit-profile' ? (
                <UpdateProfilePage
                  theme={props.theme}
                  history={history}
                  isolate={pathParam}
                />
              ) : menuContext.primaryPage === 'home' ? (
                <HomePage />
              ) : null}
            </ContentScroll>
            <Query
              query={PROFILE}
              onCompleted={(data) => {
                setProfile(data.profile);
              }}
              onError={(error) => {
                logout(history);
              }}
            >
              {({ data }) => {
                return null;
              }}
            </Query>
          </MainWrapper>
        )}
      </MenuContext.Consumer>
    </HistoryContext.Provider>
  );
}
