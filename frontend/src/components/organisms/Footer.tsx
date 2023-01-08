// ライブラリ import
import { VFC, memo, useState, ReactNode, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// コンポーネント import
// import { MaterialUiTheme } from '../../theme/MaterialUiTheme';
import { FooterTextNavigation } from '../molecules/footer/FooterTextNavigation';
import { FooterSnsIconsNavigation } from '../molecules/footer/FooterSnsIconsNavigation';
import { CopyRightText } from '../atoms/texts/CopyRightText';

// 定数 import
import { DRAWER_WIDTH } from '../../constants/constants';

// createContext import
import { ResponsiveWide } from '../../contexts/responsiveWide';

type BottomNavigationItemData = {
  id: number;
  label: string;
  value: string;
  icon: ReactNode;
  sx: {
    color: string;
    '&:hover': {
      opacity: number;
    };
    span: {
      fontSize: { xs: string; sm: string };
    };
  };
};

const bottomNavigationItem: BottomNavigationItemData[] = [
  {
    id: 1,
    label: 'ホーム',
    value: '/',
    icon: <HomeIcon sx={{ fontSize: { xs: '22px', sm: '28px' } }} />,
    sx: {
      color: 'primary.main',
      '&:hover': {
        opacity: 0.7
      },
      span: {
        fontSize: { xs: '10px', sm: '12px' }
      }
    }
  },
  {
    id: 2,
    label: '店舗一覧',
    value: '/restaurants',
    icon: <RestaurantIcon sx={{ fontSize: { xs: '22px', sm: '28px' } }} />,
    sx: {
      color: 'primary.main',
      '&:hover': {
        opacity: 0.5
      },
      span: {
        fontSize: { xs: '10px', sm: '12px' }
      }
    }
  },
  {
    id: 3,
    label: '商品一覧',
    value: '#',
    icon: <FastfoodIcon sx={{ fontSize: { xs: '22px', sm: '28px' } }} />,
    sx: {
      color: 'primary.main',
      '&:hover': {
        opacity: 0.5
      },
      span: {
        fontSize: { xs: '10px', sm: '12px' }
      }
    }
  },
  {
    id: 4,
    label: 'カート',
    value: '#',
    icon: <ShoppingCartIcon sx={{ fontSize: { xs: '22px', sm: '28px' } }} />,
    sx: {
      color: 'primary.main',
      '&:hover': {
        opacity: 0.5
      },
      span: {
        fontSize: { xs: '10px', sm: '12px' }
      }
    }
  }
];

export const Footer: VFC = memo(() => {
  const isWide = useContext(ResponsiveWide);
  const history = useHistory();
  const [value, setValue] = useState<string>('');
  return (
    <>
      {isWide ? (
        <BottomNavigation
          showLabels
          component="footer"
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
      ) : (
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
      )}
    </>
  );
});
