import { makeStyles } from '@mui/styles';

export const styles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    margin: 'auto',
  },
  borderBox: {
    border: '1px dashed #ccc',
    padding: 20,
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
