import {localhost} from './apiAddress';
import saveToken from './saveToken';

const refreshToken = token =>
  fetch(`http://${localhost}/AppBanHangServer/refresh_token.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token}),
  })
    .then(res => res.text())
    .then(newToken => {
      console.log('refreshToken OK');
      console.log(newToken);
      return saveToken(newToken);
    })
    .catch(err => console.log(err));

export default refreshToken;
