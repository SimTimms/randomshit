import React from 'react';
import { TabPage } from '../../../../components';
import { uploadMenu } from '../../../menuArray';
import { MenuContext, ProfileContext } from '../../../../context';
import { PAGES } from '../../../../const';
import { GameForm } from '../../../../widgets/games';
import MyModels from '../../../../widgets/games/myModels';

export default function UploadPage() {
  const [game, setGame] = React.useState(null);

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
                  {menu.uploadPage.primaryPage === PAGES.myUploadModels && (
                    <MyModels />
                  )}
                  {menu.uploadPage.primaryPage === PAGES.upload && (
                    <GameForm gameData={game} setGameData={setGame} />
                  )}
                </TabPage>
              );
            }}
          </MenuContext.Consumer>
        );
      }}
    </ProfileContext.Consumer>
  );
}
