import { makeStyles } from '@mui/styles';
export const sharedStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 512,
    padding: 30,
    minWidth: 512,
    boxShadow: '0 0 30px rgba(0,0,0,0.2)',
    margin: '80px 0 180px 0',
  },
  cardMobile: {
    margin: 0,
    padding: 30,
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: '100%',
  },
  pageWrapper: {
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    overflow: 'auto',
    background: '#fafafa',
  },
  pageWrapperSecondary: { background: '#fff' },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    zIndex: 2,
    position: 'relative',
  },
  description: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  cardContentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '10px !important',
    flexDirection: 'column',
  },
}));
