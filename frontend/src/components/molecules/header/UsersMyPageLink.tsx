// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type Props = {
  signInUserName: string;
};

export const UsersMyPageLink: VFC<Props> = memo((props) => {
  const { signInUserName } = props;
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
      <AccountCircleIcon sx={{ fontSize: { xs: '22px', sm: '32px' } }} />
      <Box>{signInUserName}</Box>
    </Link>
  );
});
