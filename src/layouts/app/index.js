import React, { useEffect } from 'react';
import AppDashboard from './views/appDashboard';
import HomePage from './views/homePage';
import AppHelp from './views/appHelp';
import AppProfileEdit from './views/appProfileEdit';
import { Account } from './views/account';
import { ToastContainer } from 'react-toastify';
import { Query } from '@apollo/client/react/components';
import { FAVOURITES, PROFILE, COUNTS } from '../../data/queries';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import logout from '../../utils/logout';
import CreativeRosterWidget from '../../widgets/creativeRoster';
import {
  ProfileContext,
  HistoryContext,
  UserContext,
  CountContext,
  MenuContext,
  ParamsContext,
} from '../../context';
import Cookies from 'js-cookie';
import PrimaryMenu from './primaryMenu';
import { mainMenu } from '../menuArray';
import { MainWrapper, ContentScroll } from '../../components';
import GameProfileFull from '../../widgets/games/profileCard/gameProfileFull';
import { PAGES } from '../../const';
import Stats from './stats';

export default function AppLayout(props) {
  const { history } = props;
  const [page, setPage] = React.useState('home');
  const [profile, setProfile] = React.useState(null);
  const [counts, setCounts] = React.useState({
    jobAds: 0,
    myJobAds: 0,
    work: 0,
    myWork: 0,
    invites: 0,
    inviteList: 0,
    quotes: 0,
    messages: 0,
    quotesIn: 0,
  });

  const pageJump = props.match ? props.match.params.page : null;
  const userId = Cookies.get('userId');

  //TODO: I guess this is proper dirty
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  const [pageValues, setPageValues] = React.useState({
    savedUserId: null,
    jumpPage: null,
    updateParamsContext: () => {},
  });

  useEffect(() => {
    setPageValues({
      savedUserId: pathParam ? pathParam : null,
      jumpPage: pageJump ? pageJump : null,
    });
  }, [pageJump, pathParam, history]);

  return (
    <ParamsContext.Provider
      value={{
        savedUserId: pageValues.savedUserId,
        jumpPage: pageValues.jumpPage,
        updateParamsContext: setPageValues,
      }}
    >
      <HistoryContext.Provider value={history}>
        <ProfileContext.Provider value={profile}>
          <UserContext.Provider value={userId}>
            <CountContext.Provider value={counts}>
              <MenuContext.Consumer>
                {(menuContext) => {
                  if (menuContext.homePage.secondaryPage === 'game_profile') {
                    return (
                      <GameProfileFull
                        profile={profile}
                        back={() =>
                          menuContext.updateMenuContext({
                            ...menuContext,
                            homePage: {
                              ...menuContext.homePage,
                              primaryPage: PAGES.pickModelsPrimary,
                              secondaryPage: PAGES.pickModelsSecondary,
                              gameId: null,
                            },
                          })
                        }
                      />
                    );
                    return null;
                  }
                  return (
                    <MainWrapper>
                      <ToastContainer />

                      <PrimaryMenu mainMenu={mainMenu} />
                      <ContentScroll>
                        {menuContext.primaryPage === 'stats' && profile ? (
                          <Stats
                            history={history}
                            profile={profile}
                            setProfile={setProfile}
                          />
                        ) : menuContext.primaryPage === 'dashboard' &&
                          profile ? (
                          <AppDashboard
                            history={history}
                            profile={profile}
                            setProfile={setProfile}
                          />
                        ) : menuContext.primaryPage === 'help' ? (
                          <AppHelp history={history} />
                        ) : menuContext.primaryPage === 'creative-roster' ? (
                          <Query query={FAVOURITES} fetchPolicy="network-only">
                            {({ data, loading }) => {
                              return loading
                                ? null
                                : data && (
                                    <CreativeRosterWidget history={history} />
                                  );
                            }}
                          </Query>
                        ) : menuContext.primaryPage === 'account' ? (
                          <Account history={history} />
                        ) : menuContext.primaryPage === 'edit-profile' ? (
                          <AppProfileEdit
                            theme={props.theme}
                            history={history}
                            isolate={pathParam}
                          />
                        ) : menuContext.primaryPage === PAGES.home ? (
                          <HomePage />
                        ) : menuContext.primaryPage === 'user-profile' ? (
                          <PreviewProfile
                            profileId={pathParam}
                            theme={props.theme}
                            publicView={true}
                            history={history}
                          />
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
                      <Query
                        query={COUNTS}
                        onCompleted={(data) => {
                          setCounts({
                            jobAds: data.counts.unansweredQuotes,
                            myJobAds: data.counts.unansweredQuotes,
                            work:
                              data.counts.invites +
                              data.counts.quotesDeclined +
                              data.counts.quotesAccepted,
                            myWork: data.counts.quotesAccepted,
                            invites: data.counts.invites,
                            inviteList: data.counts.invites,
                            quotes: 0,
                            history: data.counts.quotesDeclined,
                            messages: data.counts.messages,
                          });
                        }}
                        fetchPolicy="network-only"
                      >
                        {({ data }) => {
                          return null;
                        }}
                      </Query>
                    </MainWrapper>
                  );
                }}
              </MenuContext.Consumer>
            </CountContext.Provider>
          </UserContext.Provider>
        </ProfileContext.Provider>
      </HistoryContext.Provider>
    </ParamsContext.Provider>
  );
}
