import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: 2,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    boxSizing: 'border-box',
    borderLeft: `5px solid ${theme.palette.secondary.dark}`,
    borderRight: `5px solid ${theme.palette.secondary.dark}`,
    width: '100%',
  },
  delete: { background: theme.palette.error.main },
  disabled: { background: '#aaa', boxShadow: 'none' },
  title: {
    fontSize: '0.8rem',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.secondary.dark,
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
  fl: { marginRight: 'auto' },
  fr: { marginLeft: 'auto' },
  fullWidth: { width: '100%' },
}));
