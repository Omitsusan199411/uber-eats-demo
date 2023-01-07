// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

// コンポーネント import
import { HeaderMainTitle } from '../../atoms/titles/HeaderMainTitle';

export const TopPageTitleLink: VFC = memo(() => (
  <Link component={RouterLink} to="/restaurants" sx={{ textDecoration: 'none' }}>
    <HeaderMainTitle />
  </Link>
));
