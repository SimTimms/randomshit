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
    main: '#ff8c86',
    light: '#45adfb',
    dark: '#a85a57',
  };
  theme.palette.secondary = {
    ...theme.palette.secondary,
    main: '#ffcc86',
    light: process.env.REACT_APP_PALETTE_SL,
    dark: '#a67839',
  };
  theme.palette.error = {
    ...theme.palette.error,
    main: process.env.REACT_APP_PALETTE_EM,
    dark: process.env.REACT_APP_PALETTE_EL,
    light: process.env.REACT_APP_PALETTE_ED,
  };
  theme.typography.h1 = {
    fontFamily: ['American Typewriter Bold'],
    fontSize: '3rem',

    margin: 0,
    fontWeight: 600,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h2 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: '2.4rem',
    margin: 0,
    fontWeight: 200,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h3 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: '2rem',
    margin: 0,
    fontWeight: 200,
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.h4 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
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
    color: '#ff8c86',
  };
  theme.typography.h6 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: '1.4rem',
    margin: 0,
    fontWeight: 200,
    color: '#ff8c86',
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.body1 = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: '1rem',
    margin: 0,
    fontWeight: 400,
    color: '#fff',
    fontFamily: `'Special Elite', cursive`,
  };
  theme.typography.button = {
    fontFamily: [process.env.REACT_APP_THEME_FONT].join(','),
    fontSize: 14,
    fontWeight: 900,
    color: theme.palette.primary.main,
    borderRadius: 4,
  };
  return theme;
}
