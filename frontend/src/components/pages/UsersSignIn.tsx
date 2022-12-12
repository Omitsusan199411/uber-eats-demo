// ライブラリ import
import { VFC, memo } from 'react';

// コンポーネント import
import { UsersSignInLayout } from '../templates/UsersSignInLayout';

export const UsersSignIn: VFC = memo(() => {
  return (
    <>
      <UsersSignInLayout />;
    </>
  );
});
