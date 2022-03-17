import { PAGES } from '../../const';

export default function gameMenu(menu) {
  return [
    {
      name: 'Choose a Model',
      icon: 'travel_explore',
      machineName: PAGES.pickModelsSecondary,
      link: () =>
        menu.updateMenuContext({
          primaryPage: PAGES.home,
          homePage: {
            ...menu.homePage,
            secondaryPage: PAGES.pickModelsSecondary,
            gameId: null,
          },
        }),
      count: null,
    },
    {
      name: 'My Models',
      icon: 'dynamic_feed',
      machineName: PAGES.myModels,
      link: () =>
        menu.updateMenuContext({
          primaryPage: PAGES.home,
          homePage: {
            ...menu.homePage,
            secondaryPage: PAGES.myModels,
            gameId: null,
          },
        }),
      count: null,
    },
    {
      name: 'Upload Model',
      icon: 'add_circle',
      machineName: PAGES.createModel,
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: PAGES.createModel,
            gameId: 'new',
          },
        }),
      count: null,
    },
  ];
}
