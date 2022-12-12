// ライブラリ import
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import { UserSignInRequest, UserSignInResponse } from '../../types/api/User';

// url import
import { usersSignInUrl } from '../../urls/urlApi';

export const useAuthUsersSignIn = () => {
  const history = useHistory();
  const usersSignIn = useCallback((): void => {
    const params: UserSignInRequest = {
      email: 'test',
      password: 'test'
    };
    axios
      .post<UserSignInResponse>(`${usersSignInUrl}`, params)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { usersSignIn };
};
