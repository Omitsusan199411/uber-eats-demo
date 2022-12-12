// コンポーネント import
import { UsersSignUp } from '../components/pages/UsersSignUp';
import { UsersSignIn } from '../components/pages/UsersSignIn';

export const usersAuthRouter = [
  {
    id: 1,
    path: '/signUp',
    exact: true,
    children: <UsersSignUp />
  },
  {
    id: 2,
    path: '/signIn',
    exact: true,
    children: <UsersSignIn />
  }
];
