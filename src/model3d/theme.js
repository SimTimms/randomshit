import { createTheme } from '@mui/material/styles';

export default function themeDesigner() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
      fontWeight: 600,
    },
  });
  return theme;
}
