// ライブラリ import
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import { UserSignUpRequest, UserSignUpResponse, UserSignUpErrorResponse } from '../../types/api/User';

// url import
import { usersSignUpUrl } from '../../urls/urlApi';

const initialSignUpErrorMessages: UserSignUpErrorResponse = {
  name: null,
  email: null,
  password: null
};

export const useAuthUsersSignUp = () => {
  const [singUpErrorMessages, setSignUpErrorMessages] = useState<UserSignUpErrorResponse>(initialSignUpErrorMessages);
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
        const errorMessage: UserSignUpErrorResponse = error.response.data;
        console.log(errorMessage);
        setSignUpErrorMessages({
          ...errorMessage,
          name: errorMessage.name,
          email: errorMessage.email,
          password: errorMessage.password.a
        });
        console.log(singUpErrorMessages);
        history.push('/usersAuth/signUp');
      });
  }, []);
  return { usersSignUp, singUpErrorMessages, setSignUpErrorMessages };
};
