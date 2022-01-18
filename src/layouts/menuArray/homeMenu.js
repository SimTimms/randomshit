import { PAGES } from '../../const';

export default function homeMenu(menu) {
  return [
    {
      name: 'Paint',
      icon: 'brush',
      machineName: PAGES.pickModelsPrimary,
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            primaryPage: PAGES.pickModelsPrimary,
            secondaryPage: PAGES.pickModelsSecondary,
          },
        }),
      count: null,
    },
    {
      name: 'Gallery',
      icon: 'save',
      machineName: 'gallery',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            primaryPage: 'gallery',
            secondaryPage: 'browse_gallery',
          },
        }),
      count: null,
    },
    /*  {
      name: 'Factions',
      icon: 'view_in_ar',
      machineName: 'kickstarters',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            primaryPage: 'kickstarters',
            secondaryPage: 'kickstarters',
          },
        }),
      count: null,
    },*/
  ];
}
