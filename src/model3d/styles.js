import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  metallic: {
    boxShadow:
      'inset 2px 2px 5px rgba(255,255,255,0.8), inset 5px 5px 5px rgba(0,0,0,0.2), inset -3px -3px 7px rgba(0,0,0,0.3)',
  },
  shade: {
    boxShadow: ' inset -5px -5px 15px rgba(0,0,0,0.9)',
  },
  standard: { boxShadow: '2px 2px 3px rgba(0,0,0,0.2)' },
  circleIcon: {
    borderRadius: '50%',
    padding: 5,
    opacity: 0.5,
    margin: 3,
    cursor: 'pointer',
  },
  patreon: {
    width: 18,
    borderRadius: '50%',
    padding: 3,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  circleButton: {
    borderRadius: '50%',
    minHeight: 30,
    maxHeight: 30,
    height: 30,
    minWidth: 30,
    maxWidth: 30,
    width: 30,
    padding: 5,
    margin: 3,
    cursor: 'pointer',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(0,0,0,0)',
    boxShadow: '3px 3px 5px rgba(0,0,0,8)',
  },
  panelWrapper: {
    position: 'fixed',
    top: 46,
    boxSizing: 'border-box',
    left: 0,
    width: '100vw',
    height: 'calc(100% - 32px)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paintCircle: {
    borderRadius: '50% 50% 3px 3px',
    minHeight: 26,
    maxHeight: 26,
    height: 26,
    minWidth: 26,
    maxWidth: 26,
    width: 26,
    padding: 5,
    margin: 3,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
