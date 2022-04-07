import React from 'react';
import { TabPage } from '../../../../components';
import { uploadMenu } from '../../../menuArray';
import { MenuContext, ProfileContext } from '../../../../context';
import { PAGES } from '../../../../const';

export default function UploadPage() {
  return (
    <ProfileContext.Consumer>
      {(profile) => {
        if (!profile) {
          return 'No Profile';
        }
        return (
          <MenuContext.Consumer>
            {(menu) => {
              return (
                <TabPage
                  title={null}
                  primaryMenu={uploadMenu(menu)}
                  secondaryMenu={null}
                  menu={null}
                  activePrimary={menu.uploadPage.primaryPage}
                  activeSecondary={menu.uploadPage.secondaryPage}
                >
                  <div>as</div>
                </TabPage>
              );
            }}
          </MenuContext.Consumer>
        );
      }}
    </ProfileContext.Consumer>
  );
}
