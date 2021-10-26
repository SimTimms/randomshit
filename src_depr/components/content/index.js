import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';

function Content(props) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();
  return (
    <div
      className={`${clsx({
        [classes.content]: true,
        [classes.contentMobile]: mobile,
      })}`}
    >
      {props.children}
    </div>
  );
}

export default Content;
