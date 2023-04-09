// ライブラリ import
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UseFormSetError } from 'react-hook-form';

// 型 import
import { UserSignInForm, UserSignInResponse } from '../../types/api/User';

// url import
import { usersSignInUrl } from '../../urls/urlApi';

export const useAuthUsersSignIn = () => {
  const history = useHistory();
  const usersSignIn = useCallback((data: UserSignInForm, setError: UseFormSetError<UserSignInForm>): void => {
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
        const authenticationErrorData = error.response.data;
        // setErrorで入力フォームごとにエラーとそのエラーに対するメッセージをセットできる。
        // セットしたエラーは、Controllerコンポーネントのrender propsの中のfieldState.errorにオブジェクト形式（message: 'その名前は既に入力されています', type: 'custom', ref: {…}）で格納される。
        if (authenticationErrorData.email !== null) {
          setError('email', { type: 'custom', message: error.response.data.email });
        }
        if (authenticationErrorData.password !== null) {
          setError('password', { type: 'custom', message: error.response.data.password });
        }
      });
  }, []);
  return { usersSignIn };
};
