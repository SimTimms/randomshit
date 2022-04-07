import React from 'react';
import { useStyles } from './styles';
import { Icon, Typography } from '@mui/material';
import clsx from 'clsx';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Button({ menuItem, isActive, onClickEvent, fw }) {
  const { name, icon, link, image, count } = menuItem;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');
  return (
    <div
      className={clsx({
        [classes.row]: true,
        [classes.cursor]: true,
        [classes.column]: mobile,
        [classes.fullWidth]: fw,
        [classes.buttonActive]: isActive,
      })}
      onClick={() => (onClickEvent ? onClickEvent() : link())}
    >
      {image ? (
        <img
          className={`${classes.icon} ${classes.iconImage}`}
          src={image}
          alt=""
        />
      ) : icon ? (
        <Icon
          className={clsx({
            [classes.icon]: true,
            [classes.iconActive]: isActive,
          })}
        >
          {icon}
        </Icon>
      ) : null}
      <Typography
        className={clsx({
          [classes.title]: true,
          [classes.titleActive]: isActive,
        })}
        variant="body1"
      >
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
