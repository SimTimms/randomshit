import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    boxSizing: 'border-box',
    border: '1px solid rgba(255,255,255,0.3)',
    borderTop: '1px solid rgba(255,255,255,0.6)',
    borderLeft: '1px solid rgba(255,255,255,0.6)',
    color: '#222',

    '&:hover': { background: theme.palette.primary.dark, color: '#fff' },
  },
  delete: { background: theme.palette.error.main },
  disabled: { background: '#aaa', boxShadow: 'none' },
  title: {
    fontSize: '1rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    paddingTop: 1,
  },
  titleWithIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleIcon: {
    fontSize: '1rem',
    textAlign: 'center',
    marginRight: 5,
  },
  icon: { fontSize: '1rem' },
  circle: {
    background: theme.palette.secondary.main,
    borderRadius: '4px 0 0 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginRight: 10,
    height: 26,
    width: 26,
  },
  ml: { marginLeft: 10 },
  mr: { marginRight: 10 },
  mb: { marginBottom: 10 },
  mt: { marginTop: 10 },
  fullWidth: { width: '100%' },
}));
