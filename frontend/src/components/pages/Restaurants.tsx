// ライブラリimport
import { VFC, memo, useEffect, useState } from "react";

// コンポーネントimport
import { RestaurantsLayout } from "../templates/RestaurantsLayout";
import { BackdropCircular } from "../organisms/BackdropCircular";

// カスタムフックimport
// restaurantsのapi
import { useAuthRestaurants } from "../../hooks/api/useAuthRestaurants";

// 定数 import
import { REQUEST_STATE } from "../../constants/constants";

export const Restaurants: VFC = memo(() => {
  const { fetchRestaurants, restaurantsData } = useAuthRestaurants();
  const { fetchStatus, restaurantsList } = restaurantsData;
  // Drawerの開閉ステータス
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  // カスタムフック(restaurants一覧情報をapiから取得)
  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <>
      {fetchStatus === REQUEST_STATE.loading && <BackdropCircular />}
      {fetchStatus === REQUEST_STATE.ok && (
        <RestaurantsLayout restaurantsList={restaurantsList} drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
    </>
  );
});
