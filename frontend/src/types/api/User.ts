// ライブラリ import
import { SubmitHandler, Control, UseFormHandleSubmit, SubmitErrorHandler } from 'react-hook-form';

export type UserSignUpPageParams = {
  control: Control<UserSignUpForm>;
  handleSubmit: UseFormHandleSubmit<UserSignUpForm>;
  onSubmitSuccess: SubmitHandler<UserSignUpForm>;
  onSubmitError: SubmitErrorHandler<UserSignUpForm>;
};

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

export type UserSignUpForm = {
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

export type UserSignUpTextFieldInputs = {
  id: number;
  name: 'name' | 'email' | 'password' | 'password_confirmation';
  label: string;
  type: string;
};
