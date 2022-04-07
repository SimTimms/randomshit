import { PAGES } from '../../const';

export default function uploadMenu(menu) {
  return [
    {
      name: 'My Models',
      icon: 'dynamic_feed',
      machineName: PAGES.upload,
      link: () =>
        menu.updateMenuContext({
          primaryPage: PAGES.upload,
          homePage: { ...menu.homePage },
          uploadPage: {
            primaryPage: PAGES.myUploadModels,
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
          primaryPage: PAGES.upload,
          homePage: { ...menu.homePage },
          uploadPage: {
            primaryPage: PAGES.upload,
          },
        }),
      count: null,
    },
  ];
}
