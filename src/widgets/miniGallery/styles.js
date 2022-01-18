import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'auto',
    background: '#222',
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
    boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
    background: '#fff',
    borderRadius: 5,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 200,
  },
  bgWrapper: {
    width: '100%',
    height: 200,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
