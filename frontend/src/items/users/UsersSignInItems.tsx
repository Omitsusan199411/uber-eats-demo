// ライブラリ import
import { Box } from '@mui/material';

// 型 import
import { UserSignInTextFieldInputs, SignInNavLinkProps } from '../../types/api/User';

export const TextFieldInputs: UserSignInTextFieldInputs[] = [
  {
    id: 1,
    name: 'email',
    label: 'メールアドレス',
    type: 'email'
  },
  {
    id: 2,
    name: 'password',
    label: 'パスワード',
    type: 'password'
  }
];

export const SignInNavLink: SignInNavLinkProps[] = [
  {
    id: 1,
    children: <Box component="span">未登録の方はこちらへ</Box>
  },
  {
    id: 2,
    children: <Box component="span">パスワードを忘れた方はこちらへ</Box>
  }
];
