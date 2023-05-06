// ライブラリ import
import { useCallback, Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UseFormSetError } from 'react-hook-form';

// 型 import
import { UserSignUpRequest, UserSignUpResponse, UserSignUpForm, UserSignInResponseState } from '../../types/api/User';

// url import
import { usersSignUpUrl } from '../../urls/urlApi';

export const useAuthUsersSignUp = () => {
  const history = useHistory();
  const usersSignUp = useCallback(
    (
      data: UserSignUpRequest,
      userSignInState: UserSignInResponseState,
      setUserSignInState: Dispatch<SetStateAction<UserSignInResponseState>>,
      setError: UseFormSetError<UserSignUpForm>
    ): void => {
      const params: UserSignUpRequest = {
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      };
      axios
        .post<UserSignUpResponse>(`${usersSignUpUrl}`, params, { withCredentials: true }) // withCredentials: trueで異なるオリジン間のリクエストでCookieを付与できる
        .then((res) => {
          console.log(res);
          /* eslint-disable @typescript-eslint/naming-convention */
          // バックエンドのキーの関係でスネークケースを特別許可
          setUserSignInState({
            ...userSignInState,
            name: res.data.name,
            email: res.data.email,
            sign_in_state: res.data.sign_in_state
          });
          /* eslint-disable @typescript-eslint/naming-convention */
          history.push('/');
        })
        .catch((error) => {
          console.log(error);
          const validationData = error.response.data;
          // setErrorで入力フォームごとにエラーとそのエラーに対するメッセージをセットできる。
          // セットしたエラーは、Controllerコンポーネントのrender propsの中のfieldState.errorにオブジェクト形式（message: 'その名前は既に入力されています', type: 'custom', ref: {…}）で格納される
          if (validationData.name !== null) {
            setError('name', { type: 'custom', message: error.response.data.name });
          }
          if (validationData.email !== null) {
            setError('email', { type: 'custom', message: error.response.data.email });
          }
          if (validationData.password !== null) {
            setError('password', { type: 'custom', message: error.response.data.password });
          }
          history.push('/usersAuth/signUp');
        });
    },
    []
  );
  return { usersSignUp };
};
