// ライブラリ import
import { VFC, memo } from 'react';
import { Box } from '@mui/material';

export const SignInText: VFC = memo(() => (
  <Box
    color="basis.main"
    sx={{ fontFamily: 'Cabin Sketch, cursive', fontWeight: 'bold', fontSize: { xs: '22px', sm: '28px' } }}
  >
    〜 Sign In 〜
  </Box>
));
