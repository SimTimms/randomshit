import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: 200,
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBG: { minHeight: 0, maxHeight: 0, height: 0 },
  locked: { opacity: 1 },
  register: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: 5,
  },
}));
