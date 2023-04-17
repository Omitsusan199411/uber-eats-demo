// ライブラリ import
import { VFC, memo, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
// import { useMediaQuery } from 'react-responsive';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestoreIcon from '@mui/icons-material/Restore';

// コンポーネント import
import { FooterTextNavigation } from '../molecules/footer/FooterTextNavigation';
import { FooterSnsIconsNavigation } from '../molecules/footer/FooterSnsIconsNavigation';
import { CopyRightText } from '../atoms/texts/CopyRightText';

// 定数 import
import { DRAWER_WIDTH } from '../../constants/constants';

// コンテキスト import
import { ResponsiveWide } from '../../contexts/ResponsiveWide';

// 型 import
import { FooterNavigationItemsProps } from '../../types/footer/FooterNavigationItemsProps';

//  import
const FooterNavigationItems = [
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
    label: '閲覧履歴',
    value: '#',
    icon: <RestoreIcon sx={{ fontSize: { xs: '22px', sm: '28px' } }} />,
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
          {FooterNavigationItems.map((element: FooterNavigationItemsProps) => (
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
