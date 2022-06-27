// ライブラリ

import { VFC, memo, useEffect } from "react";

// カスタムフック
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 型
import { Restaurant } from "../../types/api/Restaurant";

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants } = useAuthRestaurants();
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return <div>店舗一覧ページ</div>;
});
