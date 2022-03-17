import axios from 'axios';
import Cookies from 'js-cookie';
import moment from 'moment';
import { REACT_APP_API_S3 } from '../../envVars';
export default async function uploaderScreenshot(
  imageData,
  cbFunction,
  modelId
) {
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
                model: modelId,
                saveDataColors: localStorage.getItem('modelColorSave'),
                saveDataParts: localStorage.getItem('modelPartsSave'),
              },
            });
          })
          .catch((error) => {});
      } else {
      }
    })
    .catch((error) => {});
}
