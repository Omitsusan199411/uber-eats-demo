// ライブラリ import
import { VFC, memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Link } from '@mui/material';

// コンポーネント import
import { MaterialUiTheme } from '../../../../theme/MaterialUiTheme';

// 画像 import
import instagramIcon from '../../../../images/icons/instagram/instagram-icon.png';

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

export const InstagramLink: VFC = memo(() => {
  return (
    <Link
      component={RouterLink}
      to="/"
      sx={{
        display: 'flex',
        width: '100%',
        backgroundColor: '#d93078',
        justifyContent: 'left',
        p: '10px',
        mt: '10px',
        textDecoration: 'none',
        '&:hover': { opacity: '0.5', cursor: 'pointer' }
      }}
    >
      <SnsIconImage src={instagramIcon} alt="facebook" />
      <Box sx={{ fontSize: { xs: '16px', md: '18px' }, ml: { xs: '20px', sm: '35px', md: '45px' }, mt: '2px' }}>
        Instagram
      </Box>
    </Link>
  );
});