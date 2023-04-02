// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export const UsersSignInLink: VFC = memo(() => (
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
));
