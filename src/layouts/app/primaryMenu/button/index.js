import React from 'react';
import { useStyles } from './styles';
import { Icon, Typography } from '@mui/material';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Button({ menuItem, isActive }) {
  const { name, icon, link, image, count } = menuItem;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');
  return (
    <div
      className={clsx({
        [classes.row]: true,
        [classes.cursor]: true,

        [classes.column]: mobile,
      })}
      onClick={() => link()}
    >
      {image ? (
        <img
          className={`${classes.icon} ${classes.iconImage}`}
          src={image}
          alt=""
        />
      ) : (
        <Icon
          className={clsx({
            [classes.icon]: true,
            [classes.iconActive]: isActive,
          })}
        >
          {icon}
        </Icon>
      )}
      <Typography className={classes.title} variant="h5">
        {name}
      </Typography>
      {count && count.count > 0 && (
        <div className={classes.countIcon}>
          <Typography>{count && count.count}</Typography>
        </div>
      )}
    </div>
  );
}
