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

export type UserSignUpTextFieldInputs = {
  id: number;
  name: 'name' | 'email' | 'password' | 'password_confirmation';
  label: string;
  type: string;
};

export type UserSignUpParams = {
  control: Control<UserSignUpForm>;
  handleSubmit: UseFormHandleSubmit<UserSignUpForm>;
  onSubmitData: SubmitHandler<UserSignUpForm>;
};

// Sign In

export type UserSignInForm = {
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

export type SignInNavLinkProps = {
  id: number;
  children: ReactNode;
};

export type UserSignInParams = {
  control: Control<UserSignInForm>;
  handleSubmit: UseFormHandleSubmit<UserSignInForm>;
  onSubmitData: SubmitHandler<UserSignInForm>;
};
