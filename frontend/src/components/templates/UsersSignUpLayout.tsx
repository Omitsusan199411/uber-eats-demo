// ライブラリ import
import { VFC, memo } from 'react';
import { Controller } from 'react-hook-form';
import { Stack, TextField, Button } from '@mui/material';

// type import
import { UserSignUpPageParams } from '../../types/api/User';

export const UsersSignUpLayout: VFC<UserSignUpPageParams> = memo((props) => {
  const { control, handleSubmit, onSubmitSuccess, onSubmitError } = props;

  return (
    <Stack
      component="form"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        handleSubmit(onSubmitSuccess, onSubmitError)();
      }}
      method="post"
      spacing={3}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            autoFocus={true}
            label="ニックネーム"
            color="secondary"
            variant="outlined"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="メールアドレス"
            color="secondary"
            variant="outlined"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="パスワード"
            color="secondary"
            variant="outlined"
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password_confirmation"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="パスワード確認用"
            color="secondary"
            variant="outlined"
            error={Boolean(fieldState.error)}
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
