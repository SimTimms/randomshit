import React from 'react';
import { TabPage } from '../../../../components';
import {
  homeMenu,
  gameMenu,
  kickstarterMenu,
  photoMenu,
  myPostsMenu,
} from '../../../menuArray';
import MiniGalleryPage from '../miniGalleryPage';
import MyGalleryPage from '../myGalleryPage';
import { ChooseModel } from '../../../../widgets';
import GameProfileFull from '../../../../widgets/games/profileCard/gameProfileFull';
import { PreviewProfile } from '../../../../layouts/preview/views/previewProfile';
import { MenuContext, ProfileContext } from '../../../../context';
import { PAGES } from '../../../../const';

export default function HomePage() {
  return (
    <ProfileContext.Consumer>
      {(profile) => {
        if (!profile) {
          return 'No Profile';
        }
        return (
          <MenuContext.Consumer>
            {(menu) => {
              if (menu.homePage.secondaryPage === 'game_profile') {
                return <GameProfileFull />;
              }
              return (
                <TabPage
                  title={null}
                  primaryMenu={
                    menu.homePage.secondaryPage !== 'game_profile'
                      ? homeMenu(menu)
                      : null
                  }
                  secondaryMenu={
                    menu.homePage.primaryPage === PAGES.pickModelsPrimary
                      ? menu.homePage.secondaryPage === 'game_profile'
                        ? null
                        : profile.email === 'tim-simms@hotmail.com'
                        ? gameMenu(menu)
                        : null
                      : menu.homePage.primaryPage === 'community'
                      ? null
                      : menu.homePage.primaryPage === 'kickstarters'
                      ? kickstarterMenu(menu)
                      : menu.homePage.primaryPage === 'gallery'
                      ? photoMenu(menu)
                      : menu.homePage.primaryPage === 'my_posts' &&
                        myPostsMenu(menu)
                  }
                  menu={null}
                  activePrimary={menu.homePage.primaryPage}
                  activeSecondary={menu.homePage.secondaryPage}
                >
                  {menu.homePage.primaryPage === PAGES.pickModelsPrimary &&
                  menu.homePage.secondaryPage === PAGES.pickModelsSecondary ? (
                    <ChooseModel />
                  ) : menu.homePage.secondaryPage === PAGES.createModel ? (
                    <ChooseModel />
                  ) : menu.homePage.secondaryPage === 'game_profile' ? (
                    <GameProfileFull />
                  ) : menu.homePage.secondaryPage === 'user_profile' ? (
                    <PreviewProfile profileId={menu.homePage.userId} />
                  ) : (
                    menu.homePage.secondaryPage === PAGES.myModels && (
                      <ChooseModel userId={menu.homePage.userId} />
                    )
                  )}
                  {menu.homePage.primaryPage === 'gallery' &&
                  menu.homePage.secondaryPage === 'browse_gallery' ? (
                    <MiniGalleryPage />
                  ) : (
                    menu.homePage.primaryPage === 'gallery' &&
                    menu.homePage.secondaryPage === PAGES.myModelGallery && (
                      <MyGalleryPage />
                    )
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
