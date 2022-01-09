import { PAGES } from '../../const';

export default function photoMenu(menu) {
  return [
    {
      name: 'Browse',
      icon: 'travel_explore',
      machineName: 'browse_gallery',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'browse_gallery',
            kickstarterId: null,
          },
        }),
      count: null,
    },
    {
      name: 'My Gallery',
      icon: 'dynamic_feed',
      machineName: PAGES.myModelGallery,
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: PAGES.myModelGallery,
            kickstarterId: null,
          },
        }),
      count: null,
    },
  ];
}
