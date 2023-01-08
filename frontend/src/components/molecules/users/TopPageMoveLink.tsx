// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

// コンポーネント import
import { MainTitle } from '../../atoms/titles/MainTitle';

export const TopPageMoveLink: VFC = memo(() => (
  <Link component={RouterLink} to="/" sx={{ mt: '30px', textDecoration: 'none' }}>
    <MainTitle
      family="Roboto, sans-serif"
      weight={900}
      type="italic"
      size={{ xs: '28px', sm: '32px', md: '36px' }}
      bgColor="transparent"
    />
  </Link>
));
