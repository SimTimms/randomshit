import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
  },
  header: { color: theme.palette.primary.light },
  locked: {
    background: '#ddd',
    width: '100%',
    padding: 10,
    boxSizing: 'border-box',
    textAlign: 'center',
    marginTop: 10,
  },
}));
