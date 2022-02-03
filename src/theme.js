import { createTheme } from '@mui/material/styles';

export default function themeDesigner() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
    },
  });
  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#e62b58',
    light: '#e62b58',
    dark: '#e62b58',
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
    fontWeight: 'bold',
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
    fontWeight: 900,
  };
  theme.typography.button = {
    color: theme.palette.primary.main,
    borderRadius: 4,
    fontFamily: 'Roboto',
  };
  return theme;
}
