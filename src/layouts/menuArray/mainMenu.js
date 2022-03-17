import { PAGES } from '../../const';

export default function mainMenu(history, counts, mainMenuContext, profile) {
  return [
    {
      name: 'Home',
      icon: 'home',
      machineName: PAGES.home,
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: PAGES.home,
          homePage: {
            primaryPage: PAGES.pickModelsPrimary,
            secondaryPage: PAGES.pickModelsSecondary,
          },
        }),
      count: null,
    },
    {
      name: 'Account',
      icon: 'account_circle',
      machineName: 'account',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'account',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      count: null,
    },
    profile.email === 'tim-simms@hotmail.com' && {
      name: 'Stats',
      icon: 'stats',
      machineName: 'stats',
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: 'stats',
          jobPage: { ...mainMenuContext.jobPage },
          workPage: { ...mainMenuContext.workPage },
          homePage: { ...mainMenuContext.homePage },
        }),
      count: { icon: 'star', count: counts.work },
    },
  ];
}
