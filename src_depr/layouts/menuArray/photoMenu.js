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
      machineName: 'my_models',
      link: () =>
        menu.updateMenuContext({
          primaryPage: 'home',
          jobPage: { ...menu.jobPage },
          workPage: { ...menu.workPage },
          homePage: {
            ...menu.homePage,
            secondaryPage: 'my_models',
            kickstarterId: null,
          },
        }),
      count: null,
    },
  ];
}
