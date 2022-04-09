import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  imageIconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    minHeight: 60,
    maxHeight: 60,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    background: '#fff',
    boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    color: 'rgba(0,0,0,0.4)',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },

  imageIconDelete: {
    fontSize: 20,
    background: theme.palette.primary.main,
    borderRadius: '50%',
    padding: 5,
  },
  imageIcon: {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
  imageIconLabel: {},
}));
