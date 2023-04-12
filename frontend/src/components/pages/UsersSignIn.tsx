// ライブラリ import
import { VFC, memo, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// コンポーネント import
import { UsersSignInLayout } from '../templates/UsersSignInLayout';
import { useAuthUsersSignIn } from '../../hooks/api/useAuthUsersSignIn';

// type import
import { UserSignInForm } from '../../types/api/User';

export const UsersSignIn: VFC = memo(() => {
  const { usersSignIn, failAuthenticateMessage } = useAuthUsersSignIn();
  const { control, handleSubmit } = useForm<UserSignInForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { email: '', password: '' }
  });

  const onSubmitData: SubmitHandler<UserSignInForm> = useCallback((data): void => {
    usersSignIn(data);
  }, []);

  return (
    <>
      <UsersSignInLayout
        handleSubmit={handleSubmit}
        control={control}
        onSubmitData={onSubmitData}
        failAuthenticateMessage={failAuthenticateMessage}
      />
    </>
  );
});
