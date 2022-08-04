// ライブラリ import
import { VFC, memo, useEffect } from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { useAuthLineFoodsGet } from "../../hooks/api/useAuthLineFoodsGet";

export const Orders: VFC = memo(() => {
  const { lineFoodsGet, lineFoodsData } = useAuthLineFoodsGet();
  // カスタムフックの呼び出し
  useEffect(() => {
    lineFoodsGet();
  }, []);
  return (
    <>
      {lineFoodsData.fetchStatus === "ok" ? (
        <Box>{`${lineFoodsData.lineFoodsList?.restaurant.name}`}</Box>
      ) : (
        <Box>ロード中</Box>
      )}
    </>
  );
});
