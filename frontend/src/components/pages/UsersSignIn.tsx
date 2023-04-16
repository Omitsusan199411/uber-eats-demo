// ライブラリ import
import { VFC, memo, useCallback, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

// コンポーネント import
import { UsersSignInLayout } from '../templates/UsersSignInLayout';
import { useAuthUsersSignIn } from '../../hooks/api/useAuthUsersSignIn';

// 型 import
import { UserSignInForm } from '../../types/api/User';

// コンテキスト  import
import { UserSignInContext } from '../../contexts/users/UserSignInContext';

export const UsersSignIn: VFC = memo(() => {
  const { usersSignIn, failAuthenticateMessage } = useAuthUsersSignIn();
  const { control, handleSubmit } = useForm<UserSignInForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { email: '', password: '' }
  });

  // ユーザー認証情報
  const { userSignInState, setUserSignInState } = useContext(UserSignInContext);

  // onSubmitData関数は、アロー関数で書いているためレンダリングされるたびに関数を再生成してしまう。
  // そのため、子コンポーネント以下にonSubmit関数をpropsとして渡すと、違う関数として扱われるためuseCallbackでメモ化する（子コンポーネント（UsersSignInLayout）をmemo化していることを前提）
  const onSubmitData: SubmitHandler<UserSignInForm> = useCallback((data): void => {
    usersSignIn(data, userSignInState, setUserSignInState);
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
