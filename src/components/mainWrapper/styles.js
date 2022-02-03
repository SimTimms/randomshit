import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100vw',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: '100%',
    overflow: 'hidden ',
    background: '#111',
  },
  row: { flexDirection: 'column' },
}));
