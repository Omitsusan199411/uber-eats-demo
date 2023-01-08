// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

// コンポーネント import
import { MainTitle } from '../../atoms/titles/MainTitle';

export const TopPageMoveLink: VFC = memo(() => (
  <Link component={RouterLink} to="/restaurants" sx={{ textDecoration: 'none' }}>
    <MainTitle
      family="Roboto, sans-serif"
      weight={900}
      type="italic"
      size={{ xs: '16px', sm: '24px', md: '28px' }}
      bgColor="transparent"
    />
  </Link>
));
