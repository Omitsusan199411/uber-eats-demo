// ライブラリ import
import { VFC, memo, useCallback } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// コンポーネント import
import { UsersSignUpLayout } from '../templates/UsersSignUpLayout';
import { useAuthUsersSignUp } from '../../hooks/api/useAuthUsersSignUp';

// type import
import { UserSignUpForm } from '../../types/api/User';

// バリデーションルール import
import { schema } from '../../validates/users/usersSignUpValidationRules';

export const UsersSignUp: VFC = memo(() => {
  const { usersSignUp, singUpErrorMessages, setSignUpErrorMessages } = useAuthUsersSignUp();

  const { control, handleSubmit, watch } = useForm<UserSignUpForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: { name: '', email: '', password: '', password_confirmation: '' },
    resolver: yupResolver(schema)
  });

  const onSubmitSuccess: SubmitHandler<UserSignUpForm> = useCallback((data) => {
    usersSignUp(data);
  }, []);

  const onSubmitError: SubmitErrorHandler<UserSignUpForm> = useCallback((errors) => {
    console.log(errors);
  }, []);

  return (
    <>
      <UsersSignUpLayout
        handleSubmit={handleSubmit}
        control={control}
        onSubmitSuccess={onSubmitSuccess}
        onSubmitError={onSubmitError}
        singUpErrorMessages={singUpErrorMessages}
        setSignUpErrorMessages={setSignUpErrorMessages}
        watch={watch}
      />
    </>
  );
});
