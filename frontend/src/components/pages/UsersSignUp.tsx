// ライブラリ import
import { VFC, memo } from 'react';

// コンポーネント import
import { UsersSignUpLayout } from '../templates/UsersSignUpLayout';
// import { useAuthUsersSignUp } from '../../hooks/api/useAuthUsersSignUp';

export const UsersSignUp: VFC = memo(() => {
  return (
    <>
      <UsersSignUpLayout />;
    </>
  );
});
