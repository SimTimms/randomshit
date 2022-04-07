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
  ];
}
