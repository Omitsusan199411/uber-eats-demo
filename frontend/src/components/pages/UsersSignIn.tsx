// ライブラリ import
import { VFC, memo, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// コンポーネント import
import { UsersSignInLayout } from '../templates/UsersSignInLayout';
import { useAuthUsersSignIn } from '../../hooks/api/useAuthUsersSignIn';

// type import
import { UserSignInForm } from '../../types/api/User';

export const UsersSignIn: VFC = memo(() => {
  const { usersSignIn } = useAuthUsersSignIn();
  const { control, handleSubmit, setError } = useForm<UserSignInForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { email: '', password: '' }
  });

  const onSubmitData: SubmitHandler<UserSignInForm> = useCallback((data): void => {
    usersSignIn(data, setError);
  }, []);

  return (
    <>
      <UsersSignInLayout handleSubmit={handleSubmit} control={control} onSubmitData={onSubmitData} />;
    </>
  );
});
