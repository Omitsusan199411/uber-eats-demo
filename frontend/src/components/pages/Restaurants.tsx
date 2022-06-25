// ライブラリ

import React, { VFC, memo, useEffect } from "react";

// カスタムフック
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 型
import { Restaurant } from "../../types/api/Restaurant";

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants } = useAuthRestaurants();
  useEffect(() => {
    const data = fetchRestaurants();
    console.log(data);
  }, []);
  return <div>店舗一覧ページ</div>;
});
