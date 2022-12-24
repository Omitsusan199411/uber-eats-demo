// ライブラリ import
import { VFC, memo } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// コンポーネント import
import { UsersSignUpLayout } from '../templates/UsersSignUpLayout';
// import { useAuthUsersSignUp } from '../../hooks/api/useAuthUsersSignUp';

// type import
import { UserSignUpForm } from '../../types/api/User';

// バリデーションルール import
import { schema } from '../../validates/users/usersSignUpValidationRules';

export const UsersSignUp: VFC = memo(() => {
  // const { usersSignUp } = useAuthUsersSignUp();

  const { control, handleSubmit } = useForm<UserSignUpForm>({
    mode: 'onSubmit',
    // reValidateMode: 'onBlur',
    defaultValues: { name: '', email: '', password: '', password_confirmation: '' },
    resolver: yupResolver(schema)
  });

  const onSubmitSuccess: SubmitHandler<UserSignUpForm> = (data) => {
    console.log(data);
    console.log('Success');
    // usersSignUp(data);
  };

  const onSubmitError: SubmitErrorHandler<UserSignUpForm> = (errors) => {
    console.log(errors);
    console.log('Error');
  };

  return (
    <>
      <UsersSignUpLayout
        handleSubmit={handleSubmit}
        control={control}
        onSubmitSuccess={onSubmitSuccess}
        onSubmitError={onSubmitError}
      />
    </>
  );
});
