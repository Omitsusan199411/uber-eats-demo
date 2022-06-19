// ライブラリ
import React, { VFC, memo, ReactNode } from "react";

type RouterProps = {
  params?: string;
}


export const Foods:VFC<RouterProps> = memo((props) => {
  const { params } = props;
  console.log(props);
  console.log(params);
  return (
    <>
      <p>
        Foodsコンポーネント
      </p>
      {params ? (<p>
        restaurants_idは{params}です
      </p>) : false}
    </>
  );
});