// ライブラリ import
import { VFC, memo } from 'react';
import { Controller } from 'react-hook-form';
import { Stack, TextField, Button } from '@mui/material';

// type import
import { UserSignUpPageParams } from '../../types/api/User';

// バリデーションルール import
import { validationRules } from '../../validates/users/usersSignUpValidationRules';

export const UsersSignUpLayout: VFC<UserSignUpPageParams> = memo((props) => {
  const { control, handleSubmit, onSubmitSuccess, onSubmitError } = props;

  return (
    <Stack
      component="form"
      onSubmit={() => {
        handleSubmit(onSubmitSuccess, onSubmitError);
      }}
      spacing={3}
    >
      <Controller
        name="name"
        control={control}
        rules={validationRules.name}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="ニックネーム"
            color="secondary"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={validationRules.email}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="メールアドレス"
            color="secondary"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={validationRules.password}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="パスワード"
            color="secondary"
            variant="outlined"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password_confirmation"
        control={control}
        rules={validationRules.password_confirmation}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="パスワード確認用"
            color="secondary"
            variant="outlined"
            error={!!fieldState.error?.message}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" variant="contained">
        登録
      </Button>
    </Stack>
  );
});
