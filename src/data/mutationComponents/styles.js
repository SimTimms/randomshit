import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    padding: '5px 15px 5px 15px',
    background: 'none',
    color: '#fff',
    borderRadius: 5,
    border: '1px solid #fff',
    cursor: 'pointer',
    boxShadow: '3px 3px 5px rgba(0,0,0,0.1)',
    '&:hover': { background: theme.palette.primary.dark },
  },
}));
