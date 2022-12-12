export type UserSignUpRequest = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type UserSignUpResponse = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type UserSignInRequest = {
  email: string;
  password: string;
};

export type UserSignInResponse = {
  email: string;
  password: string;
};
