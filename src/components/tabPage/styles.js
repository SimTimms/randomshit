import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tabTitle: {
    height: 40,
    width: '100%',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeader: {
    color: '#fff',
    fontSize: '1.8rem',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  secondaryMenu: {
    backgroundColor: '#fff',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.1)',
  },
  secondaryMenuWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0 10px 0',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
  },
  tabPageContent: {
    overflow: 'auto',
    height: 'calc(100% - 66px)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    boxSizing: 'border-box',
    background: '#fafafa',
  },
  tabPageContentSingle: {
    height: 'calc(100% - 68px)',
  },
}));
