import React from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styles } from './styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Slide from '@mui/material/Slide';
import { REACT_APP_COMPANY_PUBLIC_NAME } from '../../../../../envVars';

export default function RegisterCard({ setPage }) {
  const classes = styles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Card className={classes.card}>
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Thank You
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
            >
              {`You can now login to ${REACT_APP_COMPANY_PUBLIC_NAME}`}
            </Typography>
          </CardContent>
          <Divider />

          <CardContent className={classes.cardContentCenter}>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
