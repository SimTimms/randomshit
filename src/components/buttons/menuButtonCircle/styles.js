import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 5,
    boxSizing: 'border-box',
  },
  disabled: { background: '#aaa', boxShadow: 'none' },
  icon: { fontSize: '1rem', color: theme.palette.primary.main },
}));
