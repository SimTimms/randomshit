import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';

async function uploader(imageData, cbFunction) {
  const headers = {
    'Content-Type': 'image/jpeg',
  };

  const uploadURL = `${process.env.REACT_APP_API_S3}/sign_s3`;
  const token = Cookies.get('token');
  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  await axios
    .post(uploadURL, {
      ...config,
      fileName: moment(new Date()).format('MMDDYYhmmss'),
      fileType: 'jpg',
    })
    .then((response) => {
      if (response.data.data) {
        const returnData = response.data.data.returnData;
        const signedRequest = returnData.signedRequest;
        const url = returnData.url;

        const options = {
          headers: headers,
        };

        axios
          .put(signedRequest, imageData, options)
          .then((result) => {
            cbFunction({
              variables: {
                url: url,
              },
            });
          })
          .catch((error) => {});
      } else {
      }
    })
    .catch((error) => {});
}

export default uploader;
