// ライブラリ import
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ReactFacebookLoginInfo, ReactFacebookFailureResponse } from 'react-facebook-login';

// 型 import
import {
  OauthAuthenticationGoogleResponse,
  OauthAuthenticationUserResponse
} from '../../types/api/OauthAuthentication';

// URL import
import { oauthRegistrationSessionUrl } from '../../urls/urlApi';

export const useAuthFacebookUsersOauth = () => {
  const history = useHistory();
  const facebookOauthSignUpOrSignInPost = useCallback(
    (facebookRes: ReactFacebookLoginInfo | ReactFacebookFailureResponse): void => {
      console.log(facebookRes);
      const params: OauthAuthenticationGoogleResponse = {
        provider_uid: 'aaa',
        provider_name: 'aaa',
        email: 'aaa',
        name: 'aaa'
      };
      axios
        .post<OauthAuthenticationUserResponse>(`${oauthRegistrationSessionUrl}`, params, { withCredentials: true })
        .then((railsRes) => {
          console.log(railsRes);
          history.push(`/usersAuth/signIn`);
        })
        .catch((railsError) => {
          console.log(railsError);
          history.push(`/page500`);
        });
    },
    []
  );
  return { facebookOauthSignUpOrSignInPost };
};
