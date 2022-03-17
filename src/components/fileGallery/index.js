import React from 'react';
import Icon from '@mui/material/Icon';
import { useStyles } from './styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function FileGallery({ items, files, setFiles, edit }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {items.map((tile, index) => (
        <Card className={classes.card} variant="outlined" key={`card_${index}`}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {tile}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Open</Button>
          </CardActions>
        </Card>
      ))}

      {edit && (
        <div
          style={{
            height: '100%',
            background: '#ddd',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center ',
            padding: 10,
          }}
        >
          <Icon
            style={{ fontSize: 50, color: '#fff' }}
            onClick={() => {
              const newArr = [...files, 'New.txt'];
              setFiles(newArr);
            }}
          >
            add_circle
          </Icon>
        </div>
      )}
    </div>
  );
}

export default FileGallery;
