// ライブラリ import
import { VFC, memo } from 'react';
import Box from '@mui/material/Box';

export const HeaderMainTitle: VFC = memo(() => (
  <Box
    component="span"
    sx={{
      color: 'secondary.main',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: 900,
      fontStyle: 'italic',
      fontSize: { xs: '16px', sm: '24px', md: '28px' },
      backgroundColor: 'transparent'
    }}
  >
    Tech Eats
  </Box>
));
