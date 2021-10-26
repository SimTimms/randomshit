import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  messageCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
  },
  messageWrapperMobile: {
    width: '100%',
  },
  shadow: { width: '100%' },
  iconButton: {
    cursor: 'pointer',
    '&:hover': {
      color: '#222',
    },
  },
  projectImage: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: 200,
    height: 100,
  },
  rowWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: { paddingLeft: 10, paddingRight: 10 },
  notifications: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary.main,
    border: `2px solid #fff`,
    color: '#fff',
    borderRadius: '50%',
    minHeight: 30,
    maxHeight: 30,
    minWidth: 30,
    maxWidth: 30,
    marginLeft: 10,
    textShadow: ' 1px 1px 3px rgba(0,0,0,0.1)',
    boxShadow:
      '0px 0px 5px rgba(0,0,0,0.1),inset 2px 2px 2px rgba(255,255,255,0.2)',
  },
  notificationInvite: {
    background: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  notificationBad: {
    background: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  notificationProfile: {
    background: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  notificationWork: {
    background: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  notificationGood: {
    background: theme.palette.secondary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  projectNotifications: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    borderRight: '1px solid #ddd',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  messageDetails: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  messageButton: {
    width: '100%',
    lineHeight: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    margin: 0,
    borderRadius: 0,
    boxShadow: '3px 3px 5px rgba(0,0,0,0.2)',
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
  },
  buttonCentre: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderRight: '1px solid #ddd',
    paddingTop: 5,
    paddingBottom: 5,
  },
  wrapperOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    width: '100%',
  },
  avatarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 100,
    padding: 10,
  },
  avatarResponded: {
    border: `4px solid ${theme.palette.primary.main} !important`,
  },
  avatarDeclined: {
    border: '4px solid #444 !important',
  },
  avatarRounded: {
    borderRadius: '50%',
    border: '3px solid #ddd',
    width: 60,
    minWidth: 60,
    height: 60,
  },
}));
