// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const UsersCartLink: VFC = memo(() => {
  return (
    <Link
      component={RouterLink}
      to="/"
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
      <ShoppingCartIcon sx={{ fontSize: { xs: '22px', sm: '32px' } }} />
      <Box>カート</Box>
    </Link>
  );
});
