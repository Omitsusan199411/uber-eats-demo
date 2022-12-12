// ライブラリ import
import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

// コンポーネント imp

export const UsersSignInLayout: VFC = memo(() => {
  return (
    <Box>
      <h1>ユーザーサインインページ</h1>
      <Link to="/">ホームページへ</Link>
    </Box>
  );
});
