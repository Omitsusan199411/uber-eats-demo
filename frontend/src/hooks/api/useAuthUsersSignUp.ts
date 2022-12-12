// ライブラリ import
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import { UserSignUpRequest, UserSignUpResponse } from '../../types/api/User';

// url import
import { usersSignUpUrl } from '../../urls/urlApi';

export const useAuthUsersSignUp = () => {
  const history = useHistory();
  const usersSignUp = useCallback((): void => {
    const params: UserSignUpRequest = {
      name: 'test',
      email: 'test',
      password: 'test',
      password_confirmation: 'test'
    };
    axios
      .post<UserSignUpResponse>(`${usersSignUpUrl}`, params)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { usersSignUp };
};
