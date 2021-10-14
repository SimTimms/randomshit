import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'auto',
    background: '#fff',
    boxSizing: 'border-box',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

    boxSizing: 'border-box',
  },
  miniWrapper: { margin: 10, boxShadow: '3px 3px 10px rgba(0,0,0,0.2)' },
}));
