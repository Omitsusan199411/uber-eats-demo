// 型 import
import { UserSignUpTextFieldInputs } from '../../types/api/User';

export const TextFieldInputs: UserSignUpTextFieldInputs[] = [
  {
    id: 1,
    name: 'name',
    label: 'ニックネーム',
    type: 'text'
  },
  {
    id: 2,
    name: 'email',
    label: 'メールアドレス',
    type: 'email'
  },
  {
    id: 3,
    name: 'password',
    label: 'パスワード',
    type: 'password'
  },
  {
    id: 4,
    name: 'password_confirmation',
    label: 'パスワード確認用',
    type: 'password'
  }
];
