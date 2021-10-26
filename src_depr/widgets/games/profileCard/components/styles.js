import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#333',
    backgroundPosition: 'center center',
    height: 200,
    width: '100%',
    position: 'relative',
    cursor: 'pointer',
    border: `1px solid rgba(255,255,255,0.1)`,
    borderTop: `1px solid rgba(255,255,255,0.3)`,
    borderLeft: `1px solid rgba(255,255,255,0.3)`,
  },
  noBG: { minHeight: 0, maxHeight: 0, height: 0 },
}));
