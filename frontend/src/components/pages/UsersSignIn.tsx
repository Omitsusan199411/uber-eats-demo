// ライブラリ import
import { VFC, memo } from 'react';
import { useForm } from 'react-hook-form';

// コンポーネント import
import { UsersSignInLayout } from '../templates/UsersSignInLayout';

// type import
import { UserSignInForm } from '../../types/api/User';

export const UsersSignIn: VFC = memo(() => {
  const { control } = useForm<UserSignInForm>();
  return (
    <>
      <UsersSignInLayout control={control} />;
    </>
  );
});
