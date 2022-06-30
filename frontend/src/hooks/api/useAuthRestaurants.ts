// ライブラリ
import axios from "axios";
import { useCallback } from "react";

// コンポーネント
import { restaurants } from "../../urls/urlApi";

// 型
import { Restaurant } from "../../types/api/Restaurant";

// async awaitでaxios（非同期処理）を同期的な処理に。
export const useAuthRestaurants = () => {
  const fetchRestaurants = useCallback(() => {
    axios
      .get<Restaurant>(`${restaurants}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { fetchRestaurants };
};
