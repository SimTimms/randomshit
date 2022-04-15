import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'auto',
    background: '#fff',
    boxSizing: 'border-box',
    height: 'calc(100% - 132px)',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  miniWrapper: {
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 0 10px 0',
  },
  bgWrapper: {
    width: '100%',
    height: 120,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '3px 3px 10px rgba(0,0,0,0.4)',
    margin: 5,
    cursor: 'pointer',
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
    },
  },
}));
