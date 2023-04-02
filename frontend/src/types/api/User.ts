// ライブラリ import
import { ReactNode } from 'react';
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
};

// Sign In

export type UserSignInForm = {
  email: string;
  password: string;
};

export type UserSignInRequest = {
  email: string;
  password: string;
};

export type UserSignInResponse = {
  email: string;
  password: string;
};

export type UserSignInTextFieldInputs = {
  id: number;
  name: 'email' | 'password';
  label: string;
  type: string;
};

export type UserSignInPageParams = {
  control: Control<UserSignInForm>;
};

export type SignInNavLinkProps = {
  id: number;
  children: ReactNode;
};
