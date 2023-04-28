// react import
import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

// コンポーネント import
import { MaterialUiTheme } from '../../../../theme/MaterialUiTheme';

// 画像 import
import twitterIcon from '../../../../images/icons/twitter/twitter-icon.png';

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

export const TwitterOauthLink: VFC = memo(() => {
  return (
    <Link
      component={RouterLink}
      to="/"
      sx={{
        display: 'flex',
        width: { xs: '100%', sm: '98%', md: '90%' },
        backgroundColor: '#1DA1F2',
        justifyContent: 'left',
        p: '10px',
        mt: '10px',
        textDecoration: 'none',
        '&:hover': { opacity: '0.5', cursor: 'pointer' }
      }}
    >
      <SnsIconImage src={twitterIcon} alt="facebook" />
      <Box sx={{ fontSize: { xs: '16px', md: '18px' }, ml: { xs: '20px', sm: '35px', md: '45px' }, mt: '4px' }}>
        Twitter
      </Box>
    </Link>
  );
});
