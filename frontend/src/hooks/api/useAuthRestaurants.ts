// ライブラリimport
import axios, { AxiosResponse } from "axios";
import { useCallback } from "react";

// コンポーネントimport
import { restaurants } from "../../urls/urlApi";

// 型import
import { Restaurant } from "../../types/api/Restaurant";

// Axios型定義
type BaseAxiosResponseType = {
  success: boolean;
  errorMessage: string;
};

// async awaitでaxios（非同期処理）を同期的な処理に。
export const useAuthRestaurants = () => {
  const fetchRestaurants = useCallback(() => {
    axios
      .get(`${restaurants}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { fetchRestaurants };
};
