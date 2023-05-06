// ライブラリ import
import { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';

// 型 import
import { OauthAuthenticationUserInfo } from '../../types/api/OauthAuthentication';

// URL import
import { oauthRegistrationSessionUrl } from '../../urls/urlApi';

// コンテキスト import
import { UserSignInContext } from '../../contexts/users/UserSignInContext';

export const useAuthGoogleUsersOauth = () => {
  const history = useHistory();
  const { userSignInState, setUserSignInState } = useContext(UserSignInContext);
  const googleOauthSignUpOrSignInPost = useCallback((googleOauthRes): void => {
    const { googleId, profileObj, tokenObj } = googleOauthRes;
    const params = {
      provider_uid: googleId,
      provider_name: tokenObj.idpId,
      email: profileObj.email,
      name: profileObj.name
    };
    console.log(params);
    axios
      .post(`${oauthRegistrationSessionUrl}`, params, { withCredentials: true })
      .then((railsRes: AxiosResponse<OauthAuthenticationUserInfo>) => {
        console.log(railsRes);
        setUserSignInState({
          ...userSignInState,
          name: railsRes.data.name,
          email: railsRes.data.email,
          sign_in_state: railsRes.data.sign_in_state
        });
        console.log(userSignInState);
        history.push(`/restaurants`);
      })
      .catch((railsError: AxiosError) => {
        console.log(railsError);
        history.push(`/usersAuth/signIn`);
      });
  }, []);
  return { googleOauthSignUpOrSignInPost };
};
