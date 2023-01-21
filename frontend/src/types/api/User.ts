// ライブラリ import
import { SubmitHandler, Control, UseFormHandleSubmit } from 'react-hook-form';

// Sign Up
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

export type UserSignUpErrorResponse = {
  name: string | null;
  email: string | null;
  password: string | null;
};

export type UserSignUpForm = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type UserSignUpPageParams = {
  control: Control<UserSignUpForm>;
  handleSubmit: UseFormHandleSubmit<UserSignUpForm>;
  onSubmitData: SubmitHandler<UserSignUpForm>;
};

export type UserSignUpTextFieldInputs = {
  id: number;
  name: 'name' | 'email' | 'password' | 'password_confirmation';
  label: string;
  type: string;
  railsErrorMessage?: string | null;
};

// Sign In
export type UserSignInRequest = {
  email: string;
  password: string;
};

export type UserSignInResponse = {
  email: string;
  password: string;
};
