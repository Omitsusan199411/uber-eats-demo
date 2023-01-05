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
  const usersSignUp = useCallback((data: UserSignUpRequest): void => {
    const params: UserSignUpRequest = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation
    };
    axios
      .post<UserSignUpResponse>(`${usersSignUpUrl}`, params)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        history.push('/page500');
      });
  }, []);
  return { usersSignUp };
};
