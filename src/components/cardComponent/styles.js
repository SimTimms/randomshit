import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    marginBottom: 5,
    marginTop: 5,
    background: '#fff',
    boxShadow: '3px 3px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    boxSizing: 'border-box',
    color: theme.palette.wrap.text,
    borderRadius: 10,
  },
  cardLocked: {
    padding: 0,
    marginBottom: 5,
    background: 'rgba(255,255,255,0.2)',
    border: `1px solid #fff`,
  },
  cardTitle: { width: '100%' },
  cardTitleLocked: { padding: 10 },
  clickable: {
    cursor: 'pointer',
    '&:hover': { boxShadow: '5px 5px 10px rgba(0,0,0,0.1)' },
  },
  locked: {
    color: '#fff',
    borderRadius: '3px 0 0 3px',
    padding: 4,
  },
  cardMobile: { width: '100%' },
  dark: { color: '#fff', background: theme.palette.primary.dark },
  premium: { border: `1px solid ${theme.palette.primary.dark}` },
}));
