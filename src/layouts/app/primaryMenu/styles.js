import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    height: '100%',
    zIndex: 2,
    borderRight: '1px solid #444',
  },
  row: { flexDirection: 'row', width: '100%' },
  columnActive: {
    background: theme.palette.primary.main,
    height: '100%',
  },
  deviceWrapper: {
    height: 67,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  device: { height: 40 },
}));
