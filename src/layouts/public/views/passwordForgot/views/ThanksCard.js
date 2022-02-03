import React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import clsx from 'clsx';

export default function RegisterCard() {
  const classes = { ...styles(), ...sharedStyles() };
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <Card
          className={clsx({
            [classes.card]: true,
            [classes.cardMobile]: mobile,
          })}
        >
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Thank You
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              You'll receive an email any moment now, simply follow the
              instructions to reset your password
            </Typography>
          </CardContent>
          <Divider />

          <CardContent className={classes.cardContentCenter}>
            <Link to="/">
              <Button variant="contained" color="primary">
                Back
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
