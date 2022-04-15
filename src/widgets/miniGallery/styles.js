import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'auto',
    boxSizing: 'border-box',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

    boxSizing: 'border-box',
  },
  miniWrapper: {
    margin: 10,
    boxShadow: '10px 10px 15px rgba(0,0,0,0.1)',
    background: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bgWrapper: {
    width: '100%',
    height: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
