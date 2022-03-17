import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    marginTop: 5,
  },
  column: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { fontSize: '1rem', color: '#fff' },
  icon: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    marginRight: 10,
    marginLeft: 5,
    color: '#fff',
    fontSize: '1rem',
  },
  iconActive: { background: theme.palette.primary.main, color: '#222' },
  iconImage: { width: 18, height: 18, padding: 7 },
  cursor: {
    cursor: 'pointer',
    transition: 'all 0.2s ',
    color: '#fff',
    '&:hover': {
      background: 'rgba(0,0,0,0.3)',
    },
  },
  cursorActive: {
    transition: 'all 0.2s ',

    borderRight: `5px solid ${theme.palette.secondary.main}`,
  },
  countIcon: {
    borderRadius: 2,
    background: theme.palette.secondary.main,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 10,
    color: theme.palette.primary.dark,
  },
}));
