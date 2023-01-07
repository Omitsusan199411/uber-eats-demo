// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UsersSignUpLink: VFC = memo(() => (
  <Link
    component={RouterLink}
    to="/usersAuth/signUp"
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
    <AccountCircleIcon sx={{ fontSize: { xs: '22px', sm: '32px' } }} />
    <Box>新規登録</Box>
  </Link>
));
