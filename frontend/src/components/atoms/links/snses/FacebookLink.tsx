// ライブラリ import
import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

// コンポーネント import
import { MaterialUiTheme } from '../../../../theme/MaterialUiTheme';

// 画像 import
import facebookIcon from '../../../../images/icons/facebook/facebook-icon.png';

const SnsIconImage = styled.img`
  display: block;
  width: 22px;
  height: auto;
  @media (max-width: ${MaterialUiTheme.breakpoints.values.sm}px) {
    margin-left: 10px;
  }
  @media (min-width: ${MaterialUiTheme.breakpoints.values.sm}px) {
    margin-left: 30px;
  }
`;

export const FacebookLink: VFC = memo(() => {
  return (
    <Link
      component={RouterLink}
      to="/"
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#1877F2',
        justifyContent: 'left',
        p: '10px',
        mt: '10px',
        textDecoration: 'none',
        '&:hover': { opacity: '0.5', cursor: 'pointer' }
      }}
    >
      <SnsIconImage src={facebookIcon} alt="facebook" />
      <Box sx={{ fontSize: { xs: '16px', md: '18px' }, ml: { xs: '20px', sm: '35px', md: '45px' }, mt: '4px' }}>
        Facebook
      </Box>
    </Link>
  );
});
