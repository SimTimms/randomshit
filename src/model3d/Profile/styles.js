import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  avatar: {
    maxWidth: 52,
    minWidth: 52,
    height: 52,
    margin: 4,
    borderRadius: '50%',
    overflow: 'display',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: `${theme.palette.primary.main}`,
    backgroundSize: 52,
    justifyContent: 'flex-start',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',

    cursor: 'pointer',
    '&:hover': {
      maxWidth: 300,
      paddingRight: 20,
      borderRadius: 26,
      backgroundColor: `${theme.palette.primary.main}`,
    },
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
    marginRight: -62,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    overflow: 'display',
  },
}));
