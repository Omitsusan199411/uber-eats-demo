// ライブラリ import
import { VFC, memo, useState, ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// コンポーネント import
import { MaterialUiTheme } from '../../theme/MaterialUiTheme';
import { FooterTextNavigation } from '../molecules/footer/FooterTextNavigation';
import { FooterSnsIconsNavigation } from '../molecules/footer/FooterSnsIconsNavigation';
import { CopyRightText } from '../atoms/texts/CopyRightText';

// 定数 import
import { DRAWER_WIDTH } from '../../constants/constants';

type BottomNavigationItemData = {
  id: number;
  label: string;
  value: string;
  icon: ReactNode;
  sx: {
    color: string;
  };
};

const bottomNavigationItem: BottomNavigationItemData[] = [
  {
    id: 1,
    label: 'ホーム',
    value: '/',
    icon: <HomeIcon />,
    sx: {
      color: 'primary.main'
    }
  },
  {
    id: 2,
    label: '店舗一覧',
    value: '/restaurants',
    icon: <RestaurantIcon />,
    sx: {
      color: 'primary.main'
    }
  },
  {
    id: 3,
    label: 'フード一覧',
    value: '/',
    icon: <FastfoodIcon />,
    sx: {
      color: 'primary.main'
    }
  },
  {
    id: 4,
    label: 'カート',
    value: '/',
    icon: <ShoppingCartIcon />,
    sx: {
      color: 'primary.main'
    }
  }
];

export const Footer: VFC = memo(() => {
  const isWide: boolean = useMediaQuery({
    query: `(min-width: ${MaterialUiTheme.breakpoints.values.sm}px)`
  });
  const history = useHistory();
  const [value, setValue] = useState<string>('/');
  return (
    <>
      {isWide ? (
        <Box
          component="footer"
          sx={{
            backgroundColor: 'basis.main',
            p: '100px',
            pb: '60px',
            minWidth: { xs: '100%', md: `calc(100% - ${DRAWER_WIDTH})` },
            ml: { xs: '0px', md: `${DRAWER_WIDTH}` }
          }}
        >
          <Box component="nav" sx={{ maxWidth: '960px', m: '0 auto' }}>
            <FooterTextNavigation />
            <FooterSnsIconsNavigation />
            <CopyRightText />
          </Box>
        </Box>
      ) : (
        <BottomNavigation
          component="footer"
          showLabels
          value={value}
          onChange={(event, newValue: string) => {
            setValue(newValue);
            history.push(newValue);
          }}
          sx={{
            backgroundColor: 'basis.main',
            position: 'fixed',
            bottom: '0px',
            width: '100%'
          }}
        >
          {bottomNavigationItem.map((element: BottomNavigationItemData) => (
            <BottomNavigationAction
              key={element.id}
              label={element.label}
              icon={element.icon}
              value={element.value}
              sx={element.sx}
            />
          ))}
        </BottomNavigation>
      )}
    </>
  );
});
