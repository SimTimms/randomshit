import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: 'calc(100vw - 200px)',
    height: '100%',
  },
  row: { width: '100%' },
}));
