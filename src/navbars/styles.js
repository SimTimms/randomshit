import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: 'none',
    border: '1px solid #aaa',
    color: '#aaa',
    height: 38,
    margin: 5,
    padding: '0 20px',
  },
})(Button);

export const StyledLink = withStyles({
  a: { textDecoration: 'none' },
})(Link);
