import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuRoot: { width: '100%', height: 'calc(100vh - 60px)' },
  image: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
  newStore: {
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    cursor: 'pointer',
    paddingTop: 5,
  },
}));
