// ライブラリ
import axios from "axios";
import React, { useCallback } from "react";

// コンポーネント
import { restaurants } from "../../urls/urlApi";

// 型
import { Restaurant } from "../../types/api/Restaurant";

export const useAuthRestaurants = () => {
  const fetchRestaurants = useCallback(() => {
    axios
      .get<Restaurant>(`${restaurants}`)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { fetchRestaurants };
};
