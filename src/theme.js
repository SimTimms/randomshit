import { createTheme } from '@mui/material/styles';

export default function themeDesigner() {
  const theme = createTheme({});
  theme.palette.primary = {
    ...theme.palette.primary,
    main: '#e62b58',
    light: '#e62b58',
    dark: '#e62b58',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#b09c87',
    light: '#1a75cd',
    dark: '#1a75cd',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: '#ff5129',
    dark: '#ff3c3c',
    light: '#ffe154',
  };
  theme.palette.grey = {
    ...theme.palette.grey,
    main: '#222',
    dark: '#111',
    light: '#333',
  };
  theme.typography.body1 = {
    fontSize: '1rem',
    margin: 0,
    fontFamily: 'Arial',
    letterSpacing: '0.1rem',
  };
  theme.typography.h1 = {
    ...theme.typography.h1,
    fontSize: '3rem',
    margin: 0,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  };
  theme.typography.h2 = {
    fontSize: '1.4rem',
    margin: 0,
    fontFamily: 'Roboto',
  };
  theme.typography.h3 = {
    fontSize: '2rem',
    margin: 0,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  };
  theme.typography.h4 = {
    fontSize: '1.8rem',
    margin: 0,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  };
  theme.typography.h5 = {
    fontFamily: 'Arial',
    fontSize: '1rem',
    margin: 0,
    fontWeight: 'bold',
  };
  theme.typography.button = {
    color: theme.palette.primary.main,
    borderRadius: 4,
    fontFamily: 'Arial',
  };
  return theme;
}
