import { createMuiTheme } from '@material-ui/core/styles';

export default function themeDesigner() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
      fontWeight: 600,
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
    main: '#A8FF75',
    light: '#A8FF75',
    dark: '#65a540',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#3cc6ff',
    light: '#3cc6ff',
    dark: '#3cc6ff',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ffe154',
    dark: '#ff3c3c',
    light: '#ffe154',
  };
  theme.typography.h1 = {
    fontSize: '3rem',

    margin: 0,
    fontWeight: 600,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h2 = {
    fontSize: '2.4rem',
    margin: 0,
    fontWeight: 200,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h3 = {
    fontSize: '2rem',
    margin: 0,
    fontWeight: 200,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h4 = {
    fontSize: '1.8rem',
    margin: 0,
    fontWeight: 600,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h5 = {
    fontFamily: `'Special Elite', cursive`,
    fontSize: '1.6rem',
    margin: 0,
    fontWeight: 200,
  };
  theme.typography.h6 = {
    fontSize: '1.4rem',
    margin: 0,
    fontWeight: 200,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.body1 = {
    fontSize: '1rem',
    margin: 0,
    fontWeight: 600,
    color: '#fff',
    fontFamily: `'Roboto'`,
  };
  theme.typography.button = {
    fontSize: 14,
    fontWeight: 900,
    color: theme.palette.primary.main,
    borderRadius: 4,
    fontFamily: `'Special Elite', cursive`,
  };
  return theme;
}
