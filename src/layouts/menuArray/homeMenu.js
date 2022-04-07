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
      name: 'History',
      icon: 'save',
      machineName: PAGES.myModelGallery,
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            ...menu.homePage,
            primaryPage: PAGES.myModelGallery,
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
