import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  subTitle: {
    width: '300px !important',
  },
  subTitleShort: {
    background: 'none',
    paddingLeft: 5,
    borderLeft: `10px solid ${theme.palette.primary.dark}`,
  },
  subTitleText: {
    fontSize: '1.4rem',
    color: '#fff',
  },
  subTitleTextShort: {
    fontSize: '1.2rem',
    color: theme.palette.primary.dark,
  },
  menuStr: {
    fontSize: '1rem',
    padding: 5,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
}));
