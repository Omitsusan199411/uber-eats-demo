// ライブラリ import
import { VFC, memo, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

// カスタムフック import
// import { useAuthGoogleUsersOauth } from '../../../../hooks/api/useAuthGoogleUsersOauth';

export const GoogleOauthLink: VFC = memo(() => {
  // const { googleOauthSignInPost } = useAuthGoogleUsersOauth();
  const responseSuccessGoogle = (res: any) => {
    console.log('success:', res);
  };
  const responseFailGoogle = (error: any) => {
    console.log('failed:', error);
  };

  useEffect(() => {
    const initClient = () => {
      void gapi.client.init({
        clientId: `${process.env.REACT_APP_GOOGLE_OAUTH_APP_ID}`,
        scope: 'email'
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_OAUTH_APP_ID}
      buttonText="Sign in with Google"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailGoogle}
      cookiePolicy="single_host_origin"
      isSignedIn={true}
      redirectUri="http://localhost:3000"
    />
  );
});
