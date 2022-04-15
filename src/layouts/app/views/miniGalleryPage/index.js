import React from 'react';
import { Row, Column } from '../../../../components';
import { MiniGallery } from '../../../../widgets';

import { TabPage } from '../../../../components';
import { uploadMenu } from '../../../menuArray';
import { MenuContext, ProfileContext } from '../../../../context';
import { PAGES } from '../../../../const';
import { GameForm } from '../../../../widgets/games';
import MyModels from '../../../../widgets/games/myModels';

export default function MiniGalleryPage() {
  return (
    <TabPage
      title={null}
      primaryMenu={null}
      secondaryMenu={null}
      menu={null}
      activePrimary={null}
      activeSecondary={null}
    >
      <MiniGallery />
    </TabPage>
  );
}
