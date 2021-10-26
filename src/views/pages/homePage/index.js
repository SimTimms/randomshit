import React from 'react';
import { TabPage } from '../../../../components';
import {
  homeMenu,
  gameMenu,
  photoMenu,
  communityMenu,
  myPostsMenu,
  gameProfileMenu,
} from '../../../menu/menuArray';
import CommunityPage from '../communityPage';
import MyModelsPage from '../myModelsPage';
import { Games } from '../../../../widgets';
import MiniGalleryWidget from '../../widgets/miniGalleryWidget';
import GameProfileFull from '../../../../widgets/games/profileCard/gameProfileFull';
import { PreviewProfile } from '../../../../layouts/preview/views/previewProfile';
import GamesPage from '../../../../layouts/preview/views/previewProfile/gamesPage';
import { MenuContext } from '../../../../context';

export default function HomePage() {
  return (
    <MenuContext.Consumer>
      {(menu) => {
        return (
          <TabPage
            title={null}
            primaryMenu={homeMenu(menu)}
            secondaryMenu={
              menu.homePage.primaryPage === 'games'
                ? menu.homePage.secondaryPage === 'game_profile'
                  ? gameProfileMenu(menu)
                  : gameMenu(menu)
                : menu.homePage.primaryPage === 'community'
                ? communityMenu(menu)
                : menu.homePage.primaryPage === 'gallery'
                ? photoMenu(menu)
                : menu.homePage.primaryPage === 'my_posts' && myPostsMenu(menu)
            }
            menu={null}
            activePrimary={menu.homePage.primaryPage}
            activeSecondary={menu.homePage.secondaryPage}
          >
            {menu.homePage.primaryPage === 'community' &&
            menu.homePage.secondaryPage === 'dashboard' ? (
              <CommunityPage />
            ) : menu.homePage.primaryPage === 'gallery' &&
              menu.homePage.secondaryPage === 'browse_gallery' ? (
              <MiniGalleryWidget />
            ) : menu.homePage.primaryPage === 'gallery' &&
              menu.homePage.secondaryPage === 'my_models' ? (
              <MyModelsPage />
            ) : null}
            {(menu.homePage.primaryPage === 'games' &&
              menu.homePage.secondaryPage === 'games') ||
            menu.homePage.secondaryPage === 'my_games' ||
            menu.homePage.secondaryPage === 'create_game' ? (
              <Games />
            ) : menu.homePage.secondaryPage === 'game_profile' ? (
              <GameProfileFull />
            ) : menu.homePage.secondaryPage === 'user_profile' ? (
              <PreviewProfile profileId={menu.homePage.userId} />
            ) : (
              menu.homePage.secondaryPage === 'user_games' && (
                <GamesPage userId={menu.homePage.userId} />
              )
            )}
          </TabPage>
        );
      }}
    </MenuContext.Consumer>
  );
}
