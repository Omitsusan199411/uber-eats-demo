// ライブラリ import
import { VFC, memo, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { Box, Stack, TextField, Link, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LoginIcon from '@mui/icons-material/Login';

// コンポーネント import
import { TopPageMoveLink } from '../molecules/header/TopPageMoveLink';
import { SignInText } from '../atoms/texts/SignInText';
import { SignInButton } from '../atoms/buttons/users/SignInButton';
import { FacebookLink } from '../atoms/links/snses/FacebookLink';
import { InstagramLink } from '../atoms/links/snses/InstagramLink';
import { LineLink } from '../atoms/links/snses/LineLink';
import { TwitterLink } from '../atoms/links/snses/TwitterLink';

// type import
import { UserSignInPageParams } from '../../types/api/User';

// createContext import
import { ResponsiveWide } from '../../contexts/responsiveWide';

// item import
import { TextFieldInputs, SignInNavLink } from '../../items/users/UsersSignInItems';

export const UsersSignInLayout: VFC<UserSignInPageParams> = memo((props) => {
  const { control } = props;
  const isWide = useContext(ResponsiveWide);
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
      {/* サービス名 */}
      <TopPageMoveLink />
      <Box
        component="main"
        sx={{
          minWidth: { xs: '280px', sm: '520px', md: '780px' },
          backgroundColor: 'primary.main',
          mt: '30px',
          pt: { xs: '30px', sm: '50px' },
          pb: { xs: '40px', sm: '60px' }
        }}
      >
        {/* SignInアイコン */}
        <Stack component="section" spacing={1} alignItems="center">
          <LoginIcon sx={{ fontSize: { xs: '60px', sm: '80px' } }} />
          <SignInText />
        </Stack>

        {/* サインイン Snsボタンと入力フォーム */}
        <Stack component="section" direction={{ xs: 'column', md: 'row' }} sx={{ width: '100%', mt: { md: '30px' } }}>
          {/* SNSログイン */}
          <Stack component="div" direction="column" sx={{ width: { xs: '100%', sm: '65%', md: '50%' }, m: '0 auto' }}>
            {isWide || (
              <Box component="div" color="basis.sub" sx={{ textAlign: 'center' }}>
                SNSでログイン
              </Box>
            )}
            <Stack
              component="div"
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{
                pt: { xs: '20px', md: '0px' },
                pl: { xs: '50px', md: '40px' },
                pr: { xs: '50px', md: '40px' },
                mt: '20px'
              }}
            >
              <FacebookLink />
              <InstagramLink />
              <LineLink />
              <TwitterLink />
            </Stack>
          </Stack>

          {/* PC画面の時の中心線 */}
          {isWide || (
            <Divider orientation="vertical" flexItem>
              <Box component="span" color="basis.sub">
                OR
              </Box>
            </Divider>
          )}

          {/* ログインフォーム */}
          <Stack
            component="div"
            direction="column"
            justifyContent="left"
            sx={{ width: { xs: '85%', sm: '60%', md: '50%' }, m: '0 auto' }}
          >
            {isWide || (
              <Box component="div" color="basis.sub" sx={{ textAlign: 'center' }}>
                メールアドレスでログイン
              </Box>
            )}
            <Stack
              component="form"
              onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                // Todo: ログインボタン押下後の関数
              }}
              method="post"
              sx={{
                width: '100%',
                alignItems: 'center',
                pt: { xs: '10px', md: '0px' },
                pl: { xs: '20px', md: '40px' },
                pr: { xs: '20px', md: '40px' },
                mt: '20px'
              }}
            >
              {TextFieldInputs.map((input) => (
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
              <SignInButton />
            </Stack>
          </Stack>
        </Stack>

        {/* 未登録者とパスワード用の案内 */}
        <Stack component="section" direction="column" sx={{ mt: { xs: '30px', md: '25px' } }}>
          {SignInNavLink.map((link) => (
            <Link
              key={link.id}
              component={RouterLink}
              color="basis.sub"
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: { xs: '13px', sm: '16px' },
                m: '0 auto',
                mt: '25px',
                '&:hover': { opacity: '0.5', cursor: 'pointer' }
              }}
            >
              <NavigateNextIcon />
              {link.children}
            </Link>
          ))}
        </Stack>
      </Box>
    </Box>
  );
});
