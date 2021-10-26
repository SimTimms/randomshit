import React from 'react';
import { useStyles } from './styles';
import { TabPage } from '../../../../components';
import { profileMenu } from '../../../menu/menuArray';
import AccountPageContent from './accountPageContent';
import UpdateProfilePage from '../updateProfilePage';
import PreferencesPage from '../preferencesPage';
import Cookies from 'js-cookie';
import { HistoryContext } from '../../../../context';

export default function AccountPage() {
  const classes = useStyles();
  const [primaryPage, setPrimaryPage] = React.useState('profile');
  const userId = Cookies.get('userId');

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <TabPage
          title={null}
          primaryMenu={profileMenu(setPrimaryPage, history)}
          secondaryMenu={null}
          menu={null}
          activePrimary={primaryPage}
          activeSecondary={''}
        >
          <div className={classes.root}>
            {primaryPage === 'profile' && <UpdateProfilePage />}
            {primaryPage === 'preferences' && <PreferencesPage />}
            {primaryPage === 'account' && <AccountPageContent />}
          </div>
        </TabPage>
      )}
    </HistoryContext.Consumer>
  );
}
