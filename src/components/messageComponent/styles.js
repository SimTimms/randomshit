import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  messageCard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  nextButton: {
    height: '100%',
    width: '100%',
    minWidth: 0,
    background: theme.palette.primary.main,
    padding: 0,
    borderRadius: 0,
    color: '#fff',
  },
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconButton: {
    cursor: 'pointer',
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconInvite: { color: '#fff !important' },

  icon: {
    minWidth: 40,
    maxWidth: 40,
    minHeight: 40,
    maxHeight: 40,
    marginRight: -10,
    borderRadius: '50%',
    background: '#fff',
    border: '2px solid #ddd',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  count: {
    background: theme.palette.primary.main,
    borderRadius: '50%',
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -5,
    marginRight: 5,
    color: '#fff',
    border: '2px solid #fff',
    fontSize: 10,
    zIndex: 2,
  },
  countOff: {
    background: '#ddd',
  },
  iconGame: {
    marginRight: 10,
    minWidth: 20,
    maxWidth: 20,
    minHeight: 20,
    maxHeight: 20,
  },
  notifications: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    padding: 10,
  },
  notificationInvite: {
    background: theme.palette.secondary.main,
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
  },
  card: { maxWidth: 450, width: '100%', margin: '5px 0 0 0' },
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