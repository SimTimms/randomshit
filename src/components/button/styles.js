import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    marginTop: 2,
    marginBottom: 2,
    paddingTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 3,
    '&:hover': {
      background: theme.palette.grey.light,
    },
  },
  buttonActive: { background: theme.palette.grey.light },
  fullWidth: { width: '100%' },
  column: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { fontSize: '1rem', color: '#aaa' },
  titleActive: { color: '#fff' },
  icon: {
    padding: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    marginRight: 10,
    color: '#fff',
    fontSize: '1.1rem !important',
  },
  iconActive: {
    borderRadius: '50%',
    background: theme.palette.primary.main,
    boxShadow:
      'inset 2px 2px 2px rgba(255,255,255,0.2),inset -2px -2px 2px rgba(255,255,255,0.1)',
  },
  iconImage: { width: 18, height: 18, padding: 7 },
  cursor: {
    cursor: 'pointer',
    transition: 'all 0.2s ',
    color: '#fff',
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
