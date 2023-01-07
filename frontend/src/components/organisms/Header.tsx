// ライブラリ import
import { VFC, memo, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Box, Link, IconButton, Stack, Divider } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';

// コンポーネント import
import { HeaderMainTitle } from '../atoms/titles/HeaderMainTitle';

// 型 import
import { DrawerProps } from '../../types/drawer/DrawerProps';

// 定数 import
import { DRAWER_WIDTH } from '../../constants/constants';

// createContext import
import { ResponsiveWide } from '../../contexts/responsiveWide';

export const Header: VFC<DrawerProps> = memo((props) => {
  const { drawerOpen, setDrawerOpen } = props;
  const isWide = useContext(ResponsiveWide);
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
            pl: '10px'
          }}
        >
          <Stack component="div" direction="row">
            <Link component={RouterLink} to="/restaurants" sx={{ textDecoration: 'none' }}>
              <HeaderMainTitle />
            </Link>
          </Stack>
          <Stack component="div" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
            <Link
              component={RouterLink}
              to="/usersAuth/signUp"
              color="basis.main"
              sx={{
                fontSize: { xs: '10px', sm: '14px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { fontWeight: 'bold' }
              }}
            >
              <AccountCircleIcon sx={{ fontSize: { xs: '22px', sm: '32px' } }} />
              <Box>新規登録</Box>
            </Link>
            <Link
              component={RouterLink}
              to="/usersAuth/signIn"
              color="basis.main"
              sx={{
                fontSize: { xs: '10px', sm: '14px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                '&:hover': { fontWeight: 'bold' }
              }}
            >
              <LoginIcon sx={{ fontSize: { xs: '22px', sm: '32px' } }} />
              <Box>ログイン</Box>
            </Link>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
});
