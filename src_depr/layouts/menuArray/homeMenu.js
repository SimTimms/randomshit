export default function homeMenu(menu) {
  return [
    {
      name: 'Community',
      icon: 'home',
      machineName: 'community',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            primaryPage: 'community',
            secondaryPage: 'dashboard',
          },
        }),
      count: null,
    },
    /*  {
      name: 'Posts',
      icon: 'post_add',
      machineName: 'my_posts',
      link: () =>
        menu.updateMenuContext({
          primaryPage: menu.primaryPage,
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            primaryPage: 'my_posts',
            secondaryPage: 'all_posts',
          },
        }),

      count: null,
    },*/
    {
      name: 'Paint',
      icon: 'brush',
      machineName: 'games',
      link: () =>
        menu.updateMenuContext({
          ...menu,
          homePage: {
            primaryPage: 'games',
            secondaryPage: 'games',
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
    {
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
    },
  ];
}