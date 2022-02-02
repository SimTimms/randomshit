import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: 4,
    borderRadius: 10,
    width: 180,
    marginLeft: -140,
    overflow: 'display',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  avatarIcon: {
    width: 52,
    minWidth: 52,
    height: 52,
    borderRadius: '50%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: `${theme.palette.primary.main}`,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  avatarText: {
    marginLeft: 2,
    overflow: 'hidden',
    color: '#fff !important',
    whiteSpace: 'nowrap',
  },
  avatarTextInterior: { color: '#fff !important' },
  wrapper: {
    maxWidth: 62,
    width: 62,
    marginLeft: -62,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-end',
    overflow: 'display',
  },
}));
