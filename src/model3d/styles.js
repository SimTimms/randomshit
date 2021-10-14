import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  metallic: {
    boxShadow:
      'inset 2px 2px 3px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.7)',
  },
  standard: { boxShadow: '2px 2px 3px rgba(0,0,0,0.2)' },
  circleIcon: {
    borderRadius: '50%',
    padding: 5,
    opacity: 0.5,
    margin: 3,
    cursor: 'pointer',
  },
  circleIconYellow: {
    background: theme.palette.error.main,
  },
  circleIconYellowOn: {
    background: theme.palette.error.main,
    opacity: 1,
    boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.3)',
  },
  circleIconBlue: {
    background: theme.palette.secondary.main,
  },
  circleIconBlueOn: {
    background: theme.palette.secondary.main,
    opacity: 1,
    boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.3)',
  },
  circleIconGreen: {
    background: theme.palette.primary.main,
  },
  circleIconGreenOn: {
    background: theme.palette.primary.main,
    opacity: 1,
    boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.3)',
  },
  circleIconGrey: {
    opacity: 1,
    background: '#aaa',
  },
  circleIconGreyOn: {
    background: '#aaa',
    opacity: 1,
    boxShadow: 'inset 3px 3px 5px rgba(0,0,0,0.3)',
    animation: `$myEffect 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
}));
