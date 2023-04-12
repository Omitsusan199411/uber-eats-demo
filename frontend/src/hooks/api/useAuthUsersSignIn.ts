// ライブラリ import
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import { UserSignInForm, UserSignInResponse } from '../../types/api/User';

// url import
import { usersSignInUrl } from '../../urls/urlApi';

export const useAuthUsersSignIn = () => {
  const [failAuthenticateMessage, setFailAuthenticateMessage] = useState<boolean>(false);
  console.log(failAuthenticateMessage);
  const history = useHistory();
  const usersSignIn = useCallback((data: UserSignInForm): void => {
    const params: UserSignInForm = {
      email: data.email,
      password: data.password
    };
    axios
      .post<UserSignInResponse>(`${usersSignInUrl}`, params, { withCredentials: true }) // withCredentials: trueで異なるオリジン間のリクエストでCookieを付与できる
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        setFailAuthenticateMessage(true);
      });
  }, []);
  return { usersSignIn, failAuthenticateMessage };
};
