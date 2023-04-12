// ライブラリ import
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import { UserSignInForm, UserSignInResponseState } from '../../types/api/User';

// url import
import { usersSignInUrl } from '../../urls/urlApi';

export const useAuthUsersSignIn = () => {
  const [failAuthenticateMessage, setFailAuthenticateMessage] = useState<boolean>(false);
  const [userSignInState, setUserSignInState] = useState<UserSignInResponseState>({
    // バックエンド側に合わせてキー名は小文字
    email: '',
    name: '',
    sign_in_state: false
  });
  const history = useHistory();
  const usersSignIn = useCallback((data: UserSignInForm): void => {
    const params: UserSignInForm = {
      email: data.email,
      password: data.password
    };
    axios
      .post<UserSignInResponseState>(`${usersSignInUrl}`, params, { withCredentials: true }) // withCredentials: trueで異なるオリジン間のリクエストでCookieを付与できる
      .then((res) => {
        console.log(res);
        /* eslint-disable @typescript-eslint/naming-convention */
        setUserSignInState({
          ...userSignInState,
          name: res.data.name,
          email: res.data.email,
          sign_in_state: res.data.sign_in_state
        });
        /* eslint-disable @typescript-eslint/naming-convention */
        history.push('/restaurants');
      })
      .catch((error) => {
        console.log(error);
        setFailAuthenticateMessage(true);
      });
  }, []);
  return { usersSignIn, failAuthenticateMessage, userSignInState };
};
