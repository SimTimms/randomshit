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
      name: 'Create',
      icon: 'add_circle',
      machineName: 'create_game',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'create_game',
            gameId: 'new',
          },
        }),
      count: null,
    },
  ];
}
