// ライブラリ import
import { VFC, memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// コンポーネント import
import { UsersSignUpLayout } from '../templates/UsersSignUpLayout';
import { useAuthUsersSignUp } from '../../hooks/api/useAuthUsersSignUp';

// type import
import { UserSignUpForm } from '../../types/api/User';

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

  const onSubmitData = useCallback((data: UserSignUpForm): void => {
    usersSignUp(data, setError);
  }, []);

  return (
    <>
      <UsersSignUpLayout handleSubmit={handleSubmit} control={control} onSubmitData={onSubmitData} />
    </>
  );
});
