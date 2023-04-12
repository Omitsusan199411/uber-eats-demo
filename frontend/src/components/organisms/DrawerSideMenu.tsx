// ライブラリ import
import { VFC, memo, Dispatch, SetStateAction, useContext } from 'react';
import { List, ListItem, ListItemButton, ListItemText, Box, Drawer, Divider } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// コンポーネント import
import { BasicIconButton } from '../atoms/buttons/BasicIconButton';

// 定数 import
import { DRAWER_WIDTH } from '../../constants/constants';

// createContext import
import { ResponsiveWide } from '../../contexts/ResponsiveWide';

type DrawerSideMenuProps = {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerSideMenu: VFC<DrawerSideMenuProps> = memo((props) => {
  const { drawerOpen, setDrawerOpen } = props;
  const isWide = useContext(ResponsiveWide);

  return (
    <Drawer
      anchor="left"
      open={isWide ? drawerOpen : true}
      variant={isWide ? 'temporary' : 'persistent'}
      onClose={() => {
        setDrawerOpen(!drawerOpen);
      }}
      PaperProps={{
        style: {
          width: `${DRAWER_WIDTH}`,
          borderRight: '1px solid #F4F5F7',
          paddingLeft: '10px',
          paddingRight: '10px'
        }
      }}
    >
      {isWide && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            mt: '20px',
            pb: '10px'
          }}
        >
          <BasicIconButton
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
            sx={{ mr: '5px' }}
          >
            <ArrowBackIosNewIcon />
          </BasicIconButton>
        </Box>
      )}
      <Divider variant="middle" />
      <List sx={{ mt: '20px', mb: '20px' }}>
        <ListItem disablePadding sx={{ display: 'block' }}>
          {[...Array.from(Array(40).keys())].map((e: number) => (
            <ListItemButton key={e}>
              <ListItemText primary={`カテゴリー${e}`} />
            </ListItemButton>
          ))}
        </ListItem>
      </List>
      <Divider variant="middle" />
    </Drawer>
  );
});
