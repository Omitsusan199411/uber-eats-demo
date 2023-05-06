// ライブラリ import
import { VFC, memo, useContext } from 'react';
import { AppBar, Toolbar, Box, IconButton, Stack, Divider } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// コンポーネント import
import { TopPageMoveLink } from '../molecules/header/TopPageMoveLink';
import { UsersSignUpLink } from '../molecules/header/UsersSignUpLink';
import { UsersSignInLink } from '../molecules/header/UsersSignInLink';
import { UsersMyPageLink } from '../molecules/header/UsersMyPageLink';
import { UsersCartLink } from '../molecules/header/UsersCartLink';

// 型 import
import { DrawerProps } from '../../types/drawer/DrawerProps';

// 定数 import
import { DRAWER_WIDTH } from '../../constants/constants';

// コンテキスト import
import { ResponsiveWide } from '../../contexts/ResponsiveWide';
import { UserSignInContext } from '../../contexts/users/UserSignInContext';

export const Header: VFC<DrawerProps> = memo((props) => {
  const { drawerOpen, setDrawerOpen } = props;
  const isWide = useContext(ResponsiveWide);
  const { userSignInState } = useContext(UserSignInContext);

  /* eslint-disable @typescript-eslint/naming-convention */
  const { name, sign_in_state } = userSignInState;
  const signInState = sign_in_state;
  console.log(signInState);
  /* eslint-disable @typescript-eslint/naming-convention */

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={2}
      sx={{
        top: '0px',
        width: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH})` },
        ml: { xs: '0px', md: ` ${DRAWER_WIDTH}` }
      }}
    >
      <Toolbar>
        {isWide && (
          <IconButton
            sx={{ p: '0px' }}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            <MenuOpenIcon />
          </IconButton>
        )}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100vw',
            pl: '12px'
          }}
        >
          <Stack component="div" direction="row">
            <Stack component="div" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <TopPageMoveLink />
            </Stack>
          </Stack>

          {/* サインイン可否表示切り替え (真：認証成功、偽：未認証) */}
          {signInState ? (
            <Stack component="div" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <UsersMyPageLink signInUserName={name} />
              <UsersCartLink />
            </Stack>
          ) : (
            <Stack component="div" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
              <UsersSignUpLink />
              <UsersSignInLink />
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
});
