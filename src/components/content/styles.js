import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    background: '#fff',
    height: '100vh',
  },
  contentMobile: {
    marginTop: 0,
    display: 'flex',
    flexAlign: 'center',
    justifyContent: 'center',
  },
}));
