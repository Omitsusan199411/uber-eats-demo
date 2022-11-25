// ライブラリ import
import Box from '@mui/material/Box';

export const MainTitle = () => (
  <Box
    component="span"
    sx={{
      color: 'secondary.main',
      fontFamily: 'Roboto',
      fontSize: { xs: '20px', sm: '24px', md: '28px' }
    }}
  >
    Tech Eats
  </Box>
);
