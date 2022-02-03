import React from 'react';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

const StyledButton = withStyles({
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

export default function ActionButton(props) {
  return (
    <StyledButton variant="contained" color="primary" onClick={props.onClick}>
      {props.name}
    </StyledButton>
  );
}
