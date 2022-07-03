// ライブラリimport
import axios from "axios";
import { useCallback } from "react";

// コンポーネントimport
import { restaurants } from "../../urls/urlApi";

// 型import
import { Restaurant } from "../../types/api/Restaurant";

// async awaitでaxios（非同期処理）を同期的な処理に。
export const useAuthRestaurants = () => {
  const fetchRestaurants = useCallback(() => {
    axios
      .get<Restaurant[]>(`${restaurants}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { fetchRestaurants };
};
