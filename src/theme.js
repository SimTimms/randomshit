import { createMuiTheme } from '@material-ui/core/styles';

export default function themeDesigner() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
    },
    palette: {
      wrap: {
        main: process.env.REACT_APP_PALETTE_WRAP_MAIN,
        light: process.env.REACT_APP_PALETTE_WRAP_LIGHT,
        dark: process.env.REACT_APP_PALETTE_WRAP_DARK,
        text: process.env.REACT_APP_PALETTE_WRAP_TEXT,
      },
      input: {
        background: process.env.REACT_APP_PALETTE_INPUT_BACKGROUND,
      },
    },
  });
  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#2090ff',
    light: '#A8FF75',
    dark: '#1a75cd',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#2090ff',
    light: '#1a75cd',
    dark: '#1a75cd',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ff5129',
    dark: '#ff3c3c',
    light: '#ffe154',
  };
  theme.typography.h1 = {
    fontSize: '3rem',
    margin: 0,
    fontFamily: 'Roboto',
  };
  theme.typography.h2 = {
    fontSize: '2.4rem',
    margin: 0,
    fontFamily: 'Roboto',
  };
  theme.typography.h3 = {
    fontSize: '2rem',
    margin: 0,
    fontFamily: 'Roboto',
  };
  theme.typography.h4 = {
    fontSize: '1.8rem',
    margin: 0,
    fontFamily: 'Roboto',
  };
  theme.typography.h5 = {
    fontFamily: 'Roboto',
    fontSize: '1.6rem',
    margin: 0,
  };
  theme.typography.h6 = {
    fontSize: '1.4rem',
    margin: 0,
    fontFamily: 'Roboto',
  };
  theme.typography.body1 = {
    fontSize: '1rem',
    margin: 0,
    fontFamily: `'Roboto'`,
  };
  theme.typography.button = {
    color: theme.palette.primary.main,
    borderRadius: 4,
    fontFamily: 'Roboto',
  };
  return theme;
}
