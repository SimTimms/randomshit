import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import clsx from 'clsx';

export function Grid({ cols, ...props }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:900px)');
  const desktop = useMediaQuery('(min-width:1600px)');
  return (
    <div
      className={clsx({
        [classes.grid]: true,
      })}
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {props.children}
    </div>
  );
}

export function Title({ title }) {
  const classes = useStyles();
  return <Typography className={classes.title}>{title}</Typography>;
}

export function MainTitle({ title }) {
  const classes = useStyles();
  return <Typography className={classes.mainTitle}>{title}</Typography>;
}

export function Column(props) {
  const {
    children,
    a,
    j,
    w,
    p,
    b,
    br,
    h,
    bg,
    m,
    mw,
    classAdd,
    onClickEvent,
    bb,
    of,
    mh,
  } = props;
  const align = a ? a : 'center';
  const width = w ? w : '100%';
  const maxWidth = mw ? mw : '100%';
  const maxHeight = mh ? mh : '100%';
  const height = h ? h : '';
  const justify = j ? j : 'center';
  const padding = p ? p : 0;
  const border = b ? b : 'none';
  const background = bg ? bg : '';
  const borderRadius = br ? br : 0;
  const borderBottom = bb ? bb : 0;
  const margin = m ? m : 0;
  const overflow = of ? of : '';
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:600px)');

  return (
    <div
      style={{
        width: width,
        alignItems: align,
        justifyContent: justify,
        padding,
        border,
        borderRadius,
        boxSizing: 'border-box',
        height,
        background,
        margin,
        maxWidth,
        borderBottom,
        overflow,
        maxHeight,
      }}
      className={clsx({
        [classes.desktop]: true,
        [classAdd]: classAdd,
        [classes.primaryBack]: background === 'primary',
        [classes.secondaryBack]: background === 'secondary',
      })}
      onClick={onClickEvent ? onClickEvent : null}
    >
      {children}
    </div>
  );
}

export function Row(props) {
  const {
    children,
    a,
    j,
    wrap,
    w,
    b,
    pb,
    pt,
    pl,
    pr,
    v,
    mb,
    mt,
    mr,
    mw,
    br,
    bg,
    h,
    o,
    of,
    bb,
    className,
    onClickEvent,
    pointer,
  } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';
  const width = w ? w : '100%';
  const border = b ? b : '';
  const paddingBottom = pb ? pb : '';
  const paddingTop = pt ? pt : '';
  const paddingLeft = pl ? pl : '';
  const paddingRight = pr ? pr : '';
  const marginBottom = mb ? mb : '';
  const marginRight = mr ? mr : '';
  const marginTop = mt ? mt : '';
  const borderRadius = br ? br : '';
  const background = bg ? bg : '';
  const height = h ? h : '';
  const opacity = o ? o : '';
  const overflow = of ? of : '';
  const maxWidth = mw ? mw : '';
  const borderBottom = bb ? bb : '';

  return v === 'none' ? null : (
    <div
      style={{
        display: 'flex',
        width,
        flexDirection: 'row',
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        border,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        marginBottom,
        marginTop,
        marginRight,
        borderRadius,
        background,
        height,
        opacity,
        overflow,
        maxWidth,
        boxSizing: 'border-box',
        cursor: pointer,
        borderBottom,
        cursor: onClickEvent ? 'pointer' : 'default',
      }}
      className={className ? className : null}
      onClick={() => (onClickEvent ? onClickEvent() : null)}
    >
      {children}
    </div>
  );
}

export function RowCheckList(props) {
  const { children, a, j, wrap, active, pointer, onClickEvent } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        opacity: !active ? 0.3 : 1,
        height: 20,
        cursor: pointer ? 'pointer' : 'default',
      }}
      onClick={() => (onClickEvent ? onClickEvent() : null)}
    >
      {children}
    </div>
  );
}

export function TopMenuWrapper(props) {
  const classes = useStyles();

  const { children, a, j, wrap } = props;
  const align = a ? a : 'center';
  const justify = j ? j : 'center';

  return (
    <div
      className={classes.menuWrapper}
      style={{
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
}

export function PrimaryMenuWrapper({ children }) {
  const classes = useStyles();

  return <div className={classes.primaryMenuWrapper}>{children}</div>;
}

export function DividerMini() {
  const classes = useStyles();

  return <div className={classes.divider}></div>;
}

export function DividerWithLine() {
  const classes = useStyles();

  return <div className={classes.dividerWithLine}></div>;
}
