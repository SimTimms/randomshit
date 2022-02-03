import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '0.8rem',
    '&:hover': { color: theme.palette.secondary.main },
  },
  underline: {
    textDecoration: 'underline',
  },
}));
