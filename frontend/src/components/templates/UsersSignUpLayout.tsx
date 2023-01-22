// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Box, Stack, TextField, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// コンポーネント imoport
import { SignUpButton } from '../atoms/buttons/users/SignUpButton';
import { SignUpText } from '../atoms/texts/SignUpText';
import { TopPageMoveLink } from '../molecules/users/TopPageMoveLink';

// type import
import { UserSignUpPageParams, UserSignUpTextFieldInputs } from '../../types/api/User';

export const UsersSignUpLayout: VFC<UserSignUpPageParams> = memo((props) => {
  const { control, handleSubmit, onSubmitData } = props;
  const TextFieldInputs: UserSignUpTextFieldInputs[] = [
    {
      id: 1,
      name: 'name',
      label: 'ニックネーム',
      type: 'text'
    },
    {
      id: 2,
      name: 'email',
      label: 'メールアドレス',
      type: 'email'
    },
    {
      id: 3,
      name: 'password',
      label: 'パスワード',
      type: 'password'
    },
    {
      id: 4,
      name: 'password_confirmation',
      label: 'パスワード確認用',
      type: 'password'
    }
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: 'basis.light',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: '40px'
        }}
      >
        <TopPageMoveLink />
        <Box
          component="main"
          sx={{
            minWidth: { xs: '280px', sm: '520px' },
            backgroundColor: 'primary.main',
            mt: '30px',
            pt: { xs: '30px', sm: '50px' },
            pl: { xs: '30px', sm: '100px' },
            pr: { xs: '30px', sm: '100px' },
            pb: { xs: '30px', sm: '50px' }
          }}
        >
          <Stack component="div" spacing={1} sx={{ alignItems: 'center' }}>
            <AccountCircleIcon sx={{ fontSize: { xs: '60px', sm: '80px' } }} />
            <SignUpText />
          </Stack>
          <Stack
            component="form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              // handleSubmit()を実行すると、関数を返す。handleSubmit()はformのdataをオブジェクト型で関数（onSubmitData）に渡す。
              void handleSubmit(onSubmitData)();
            }}
            method="post"
            sx={{ alignItems: 'center' }}
          >
            {TextFieldInputs.map((input: UserSignUpTextFieldInputs) => (
              <Controller
                key={input.id}
                name={input.name}
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <TextField
                      {...field}
                      label={input.label}
                      color="secondary"
                      variant="standard"
                      error={Boolean(fieldState.error)}
                      helperText={fieldState.error?.message}
                      fullWidth={true}
                      sx={{ mt: '24px' }}
                    />
                  </>
                )}
              />
            ))}
            <Link
              component={RouterLink}
              to="/"
              color="basis.sub"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                mt: '30px',
                fontSize: { xs: '13px', sm: '16px' }
              }}
            >
              <NavigateNextIcon />
              <Box component="span">パスワードを忘れた方はこちらへ</Box>
            </Link>
            <SignUpButton />
          </Stack>
        </Box>
      </Box>
    </>
  );
});
