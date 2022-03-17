import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fafafa',
    zIndex: 9,
    color: theme.palette.primary.main,
  },
  appBar: {
    height: 64,
    position: 'relative',
    boxSizing: 'border-box',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  appBarShift: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 64,
    boxSizing: 'border-box',
    padding: 0,
  },
  appBarShiftMobile: {
    width: `100%`,
    marginLeft: 0,
  },
  appBarChild: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  appBarChildMobile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarNoSidebar: {
    paddingLeft: 0,
  },
}));
