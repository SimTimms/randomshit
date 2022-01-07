import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: 10,
    color: '#222',
  },
  subTitle: {
    color: '#222',
    fontSize: 20,
    textShadow: '0 0 50px rgba(0,0,0,1)',
    width: '100%',
  },
  descriptionTitle: {
    textAlign: 'center',
    width: '100%',
    whiteSpace: 'nowrap',
    color: theme.palette.primary.dark,
  },
  descriptionTitleTwo: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: theme.palette.primary.dark,
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerLine: {
    borderTop: `1px dashed #ccc`,
    width: '100%',
  },
  headerLineTwo: {
    borderTop: `1px dashed #ccc`,
    width: 40,
  },
  headerLineTwoFull: {
    borderTop: `1px dotted #ccc`,
    width: '100%',
  },
  description: {
    marginTop: 10,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  descriptionLeft: {
    fontSize: 14,
    marginTop: 10,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'left',
    letterSpacing: -0.3,
    paddingLeft: 44,
  },
  meta: {
    fontSize: 12,
    color: '#222',
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
  },
  descriptionLink: {
    fontSize: 14,
    marginTop: 10,
    boxSizing: 'border-box',
    width: '100%',
    textAlign: 'center',
    fontWeight: 600,
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  columnWrapper: {
    maxWidth: 600,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    paddingBottom: 30,
    boxSizing: 'border-box',
    flexDirection: 'column',
    background: 'rgba(255,255,255,0.1)',
  },
  columnWrapperFull: { width: '100%', maxWidth: 2000 },
}));