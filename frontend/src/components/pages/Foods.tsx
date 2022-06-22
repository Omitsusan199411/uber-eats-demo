// ライブラリ
import React, { VFC, memo } from "react";
import { useParams } from "react-router-dom";

type RouterProps = {
  restaurants_id?: string;
}


export const Foods:VFC = memo(() => {
  const { restaurants_id } = useParams<RouterProps>();
  console.log(restaurants_id);
  return (
    <>
      <p>
        Foodsコンポーネント
      </p>
      {restaurants_id ? (<p>
        restaurants_idは{restaurants_id}です
      </p>) : false}
    </>
  );
});