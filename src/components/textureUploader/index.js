import React, { useRef } from 'react';
import axios from 'axios';
import { useStyles } from './styles';
import { Typography, Button, Icon } from '@mui/material';
import Cookies from 'js-cookie';
import { REACT_APP_API_S3 } from '../../envVars';
function TextureUploader({
  cbImage,
  styleOverride,
  className,
  cbDelete,
  hasFile,
  size,
  modelFolder,
  fileTypes,
  ...props
}) {
  const classes = useStyles();
  const [statusMessage, setStatusMessage] = React.useState('');
  const textureArr = useRef([]);
  let uploadInput = null;
  async function handleUpload(ev) {
    // Split the filename to get the name and type

    if (!uploadInput.files[0]) {
      return null;
    }

    const fileLength = uploadInput.files.length;

    for (let i = 0; i < fileLength; i++) {
      const file = uploadInput.files[i];
      let fileParts = file.name.split('.');
      let fileName = fileParts[0];
      let fileType = fileParts[fileParts.length - 1];
      let fileSize = file.size;

      const headers = {
        'Content-Type': 'image/jpeg',
      };

      const uploadURL = `${REACT_APP_API_S3}/sign_s3`;
      const token = Cookies.get('token');
      let config = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };

      await axios
        .post(uploadURL, {
          ...config,
          fileName: `${modelFolder}/${fileName}`,
          fileType: fileType,
          fileSize,
          category: 'profileBG',
        })
        .then(async (response) => {
          if (response.data.data) {
            const returnData = response.data.data.returnData;
            const signedRequest = returnData.signedRequest;
            const url = returnData.url;

            const options = {
              headers: headers,
            };

            await axios
              .put(signedRequest, file, options)
              .then((result) => {
                textureArr.current = [...textureArr.current, url];
              })
              .catch((error) => {});
          } else {
          }
        })
        .catch((error) => {});
    }
    cbImage(textureArr.current);
  }

  return (
    <label
      className={`${classes.imageIconWrapper} ${className}`}
      style={styleOverride}
    >
      {statusMessage === 'Uploading...' && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.2)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h2" component="p">
            Uploading....please wait
          </Typography>
        </div>
      )}

      {statusMessage && <Typography gutterBottom>{statusMessage}</Typography>}

      {hasFile ? (
        <Button
          onClick={() => {
            cbDelete();
          }}
          style={{ color: '#fff', left: 0 }}
        >
          <Icon className={classes.imageIconDelete} style={{ fontSize: 20 }}>
            close
          </Icon>
        </Button>
      ) : statusMessage === '' ? (
        <div style={{ textAlign: 'center' }}>
          <Icon className={classes.imageIcon}>add_photo_alternate</Icon>
          {size && (
            <Typography variant="body1" style={{ fontSize: 10, lineHeight: 1 }}>
              {size}
            </Typography>
          )}
        </div>
      ) : (
        <Icon className={classes.imageIcon} style={{ fontSize: 20 }}>
          cancel
        </Icon>
      )}
      <input
        type="file"
        ref={(input) => {
          uploadInput = input;
        }}
        style={{ display: 'none' }}
        onChange={handleUpload}
        accept=".png, .jpg"
        multiple
      />
    </label>
  );
}

export default TextureUploader;
