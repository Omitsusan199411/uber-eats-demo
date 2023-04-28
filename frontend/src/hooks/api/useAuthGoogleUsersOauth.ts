// ライブラリ import
import { useCallback } from 'react';
import axios from 'axios';

export const useAuthGoogleUsersOauth = () => {
  const googleOauthSignInPost = useCallback((): void => {
    const params = {
      token: 'aaa',
      backend: 'aaa',
      grant_type: 'aaa',
      client_id: 'aaa',
      client_secret: 'aaa'
    };
    axios
      .post('aaa', params)
      .then((res: any) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  return { googleOauthSignInPost };
};
