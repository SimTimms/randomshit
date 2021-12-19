export default function homeMenu(menu) {
  return [
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
