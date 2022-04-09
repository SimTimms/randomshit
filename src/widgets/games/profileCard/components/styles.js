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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  noBG: { minHeight: 80, maxHeight: 0, height: 0 },
  locked: { opacity: 1 },
  register: {
    background: theme.palette.secondary.main,
    color: '#fff',
    padding: 5,
    boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
  },
}));
