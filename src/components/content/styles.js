import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    background: '#111',
  },
  contentMobile: {
    marginTop: 0,
    display: 'flex',
    flexAlign: 'center',
    justifyContent: 'center',
  },
}));
