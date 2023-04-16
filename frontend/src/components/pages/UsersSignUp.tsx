// ライブラリ import
import { VFC, memo, useCallback, useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// コンポーネント import
import { UsersSignUpLayout } from '../templates/UsersSignUpLayout';
import { useAuthUsersSignUp } from '../../hooks/api/useAuthUsersSignUp';

// 型 import
import { UserSignUpForm } from '../../types/api/User';

// コンテキスト
import { UserSignInContext } from '../../contexts/users/UserSignInContext';

// バリデーションルール import
import { schema } from '../../validates/users/usersSignUpValidationRules';

export const UsersSignUp: VFC = memo(() => {
  const { usersSignUp } = useAuthUsersSignUp();

  const { control, handleSubmit, setError } = useForm<UserSignUpForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { name: '', email: '', password: '', password_confirmation: '' },
    resolver: yupResolver(schema)
  });

  const { userSignInState, setUserSignInState } = useContext(UserSignInContext);

  const onSubmitData: SubmitHandler<UserSignUpForm> = useCallback((data): void => {
    usersSignUp(data, userSignInState, setUserSignInState, setError);
  }, []);

  return (
    <>
      <UsersSignUpLayout handleSubmit={handleSubmit} control={control} onSubmitData={onSubmitData} />
    </>
  );
});
