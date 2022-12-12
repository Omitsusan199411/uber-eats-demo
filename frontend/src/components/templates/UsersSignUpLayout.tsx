// ライブラリ import
import { VFC, memo } from 'react';
import { Link } from 'react-router-dom';

// コンポーネント import

export const UsersSignUpLayout: VFC = memo(() => {
  return (
    <>
      <h1>ユーザーサインアップページ</h1>
      <Link to="/">ホームページへ</Link>
    </>
  );
});
