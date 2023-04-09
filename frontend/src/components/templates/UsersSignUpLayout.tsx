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

// array item import
import { TextFieldInputs } from '../../items/users/UsersSignUpItems';

// type import
import { UserSignUpParams, UserSignUpTextFieldInputs } from '../../types/api/User';

export const UsersSignUpLayout: VFC<UserSignUpParams> = memo((props) => {
  const { control, handleSubmit, onSubmitData } = props;

  return (
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
        {/* サイアップアイコン・タイトル */}
        <Stack component="div" spacing={1} alignItems="center">
          <AccountCircleIcon sx={{ fontSize: { xs: '60px', sm: '80px' } }} />
          <SignUpText />
        </Stack>

        {/* 入力フォーム */}
        <Stack
          component="form"
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            // handleSubmit関数を実行するためにsubmitイベントをキャンセル
            event.preventDefault();
            // handleSubmit()を実行すると、onSubmitData関数に引数としてApiからのレスポンスデータ（オブジェクト型）を渡す。フォームの入力データをonSubmitData関数に渡す役割
            // void演算子でhandleSubmitの返り値の型（Promise型）を無視。Promise型のすべての式は.then()関数と.catch()関数で終わらなければならない。
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

          {/* アカウントをお持ちではない方向けの案内 */}
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
            <Box component="span">既にアカウントをお持ちの方はこちらへ</Box>
          </Link>
          <SignUpButton />
        </Stack>
      </Box>
    </Box>
  );
});
