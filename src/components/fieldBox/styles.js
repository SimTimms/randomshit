import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  input: {
    display: 'flex',
    position: 'relative',
    fontFamily: theme.typography.fontFamily,
    resize: 'vertical',
    padding: '10px 0 10px 0',
    border: 'none',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: 14,
    width: '100%',
  },
  one: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 3,
    marginBottom: 3,
  },
  two: { width: '100%', display: 'flex', whiteSpace: 'nowrap' },
  descriptionBox: {
    background: theme.palette.primary.dark,
    padding: 10,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
  },
  inputLabel: {
    fontSize: '0.8rem',
    marginTop: 5,
  },
  inputLabelRed: { color: theme.palette.error.main },
  small: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  hide: { display: 'none' },
  openClose: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 30,
    border: '1px solid #ccc',
    borderRadius: '50%',
    marginRight: 10,
  },
  openCloseOff: { display: 'none' },
  infoBox: {
    marginTop: 10,
    background: theme.palette.primary.main,
    padding: 10,
    borderRadius: 5,
  },
  helpIcon: {
    marginLeft: 5,
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    fontSize: 16,
    lineHeight: 1.1,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
