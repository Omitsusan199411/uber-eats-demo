// ライブラリ import
import { VFC, memo } from 'react';
import FacebookLogin from 'react-facebook-login';

// カスタムフック import
import { useAuthFacebookUsersOauth } from '../../../../hooks/api/useAuthFacebookUsersOauth';

export const FacebookOauthLink: VFC = memo(() => {
  const { facebookOauthSignUpOrSignInPost } = useAuthFacebookUsersOauth();
  return (
    <FacebookLogin
      appId={process.env.REACT_APP_FACEBOOK_OAUTH_APP_ID}
      autoLoad={true}
      fields="name, email"
      scope="public_profile, email"
      callback={facebookOauthSignUpOrSignInPost}
      icon="fa-facebook"
    />
  );
});
