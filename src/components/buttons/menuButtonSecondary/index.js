import React from 'react';
import { Icon, Typography } from '@mui/material';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Row } from '../../';

export default function MenuButtonSecondary({
  title,
  active,
  onClickEvent,
  icon,
  disabled,
  count,
}) {
  const classes = useStyles();

  return (
    <div className={classes.buttonWrapper} onClick={() => onClickEvent()}>
      <Row>
        <Icon
          className={clsx({
            [classes.icon]: true,
            [classes.iconOn]: active,
            [classes.iconDisabled]: disabled,
          })}
        >
          {icon}
        </Icon>
        {count && count > 0 ? (
          <Icon className={classes.count}>star</Icon>
        ) : null}
      </Row>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
}
