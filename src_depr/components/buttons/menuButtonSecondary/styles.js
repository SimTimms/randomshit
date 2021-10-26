import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    cursor: 'pointer',
    marginRight: 20,
  },
  title: {
    marginLeft: 10,
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  icon: { fontSize: '1rem', borderRadius: '50%', color: '#fff', padding: 5 },
  iconOn: {
    fontSize: '1rem',
    background: theme.palette.primary.main,
    color: '#222',
  },

  iconDisabled: { opacity: 0.4 },
  count: {
    background: theme.palette.secondary.main,
    borderRadius: 2,
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.primary.dark,
    zIndex: 2,
    fontSize: 10,
  },
}));
