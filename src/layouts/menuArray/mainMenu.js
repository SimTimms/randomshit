import { PAGES } from '../../const';

export default function mainMenu(history, counts, mainMenuContext, profile) {
  return [
    {
      name: 'Paint',
      icon: 'brush',
      machineName: PAGES.home,
      link: () =>
        mainMenuContext.updateMenuContext({
          ...mainMenuContext,
          primaryPage: PAGES.home,
          homePage: {
            primaryPage: PAGES.pickModelsPrimary,
            secondaryPage: PAGES.pickModelsSecondary,
          },
        }),
      count: null,
    },
    profile.priority === 0 && {
      name: 'Upload',
      icon: 'upload',
      machineName: PAGES.upload,
      link: () =>
        mainMenuContext.updateMenuContext({
          ...mainMenuContext,
          primaryPage: PAGES.upload,
          homePage: {},
          uploadPage: {
            primaryPage: PAGES.upload,
          },
        }),
      count: null,
    },
    {
      name: 'Gallery',
      icon: 'photos',
      machineName: PAGES.gallery,
      link: () =>
        mainMenuContext.updateMenuContext({
          primaryPage: PAGES.gallery,
          homePage: {},
          uploadPage: {},
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
          uploadPage: {},
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
