import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  metallic: {
    boxShadow:
      'inset 2px 2px 3px rgba(255,255,255,0.8), inset -2px -2px 5px rgba(0,0,0,0.7)',
  },
  standard: { boxShadow: '2px 2px 3px rgba(0,0,0,0.2)' },
}));
