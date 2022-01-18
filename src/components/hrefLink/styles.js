import { makeStyles } from '@material-ui/core/styles';
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
