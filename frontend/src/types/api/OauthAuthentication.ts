export type OauthAuthenticationGoogleResponse = {
  email: string;
  name: string;
  provider_name: string;
  provider_uid: string;
};

export type OauthAuthenticationUserResponse = {
  email: string;
  name: string;
  sign_in_state: boolean;
};
