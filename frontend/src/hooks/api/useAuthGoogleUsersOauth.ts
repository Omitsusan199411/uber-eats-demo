// ライブラリ import
import { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// 型 import
import {
  OauthAuthenticationGoogleResponse,
  OauthAuthenticationUserResponse
} from '../../types/api/OauthAuthentication';

// URL import
import { oauthRegistrationSessionUrl } from '../../urls/urlApi';

// コンテキスト import
import { UserSignInContext } from '../../contexts/users/UserSignInContext';

export const useAuthGoogleUsersOauth = () => {
  const history = useHistory();
  const { userSignInState, setUserSignInState } = useContext(UserSignInContext);
  const googleOauthSignUpOrSignInPost = useCallback((googleOauthRes): void => {
    console.log(googleOauthRes);
    const { googleId, profileObj, tokenObj } = googleOauthRes;
    const params: OauthAuthenticationGoogleResponse = {
      provider_uid: googleId,
      provider_name: tokenObj.idpId,
      email: profileObj.email,
      name: profileObj.name
    };
    axios
      .post<OauthAuthenticationUserResponse>(`${oauthRegistrationSessionUrl}`, params, { withCredentials: true })
      .then((railsRes) => {
        console.log(railsRes);
        setUserSignInState({
          ...userSignInState,
          name: railsRes.data.name,
          email: railsRes.data.email,
          sign_in_state: railsRes.data.sign_in_state
        });
        history.push(`/restaurants`);
      })
      .catch((railsError) => {
        if (railsError.response.status === 401) {
          console.log(railsError);
          history.push(`/usersAuth/signIn`);
        } else {
          history.push(`/page500`);
        }
      });
  }, []);
  return { googleOauthSignUpOrSignInPost };
};
