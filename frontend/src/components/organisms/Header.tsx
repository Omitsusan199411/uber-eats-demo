// ライブラリ import
import { VFC, memo, useContext } from 'react';
import { AppBar, Toolbar, Box, IconButton, Stack, Divider } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// コンポーネント import
import { TopPageMoveLink } from '../molecules/heater/TopPageMoveLink';
import { UsersSignUpLink } from '../molecules/heater/UsersSignUpLink';
import { UsersSignInLink } from '../molecules/heater/UsersSignInLink';

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
            pl: '12px'
          }}
        >
          <Stack component="div" direction="row">
            <TopPageMoveLink />
          </Stack>
          <Stack component="div" direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
            <UsersSignUpLink />
            <UsersSignInLink />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
});
