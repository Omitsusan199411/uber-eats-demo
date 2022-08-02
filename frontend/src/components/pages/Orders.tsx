// ライブラリ import
import { VFC, memo, useEffect } from "react";

// コンポーネント import
import { useAuthLineFoodsGet } from "../../hooks/api/useAuthLineFoodsGet";

export const Orders: VFC = memo(() => {
  const { lineFoodsGet } = useAuthLineFoodsGet();
  useEffect(() => {
    console.log(lineFoodsGet());
  }, []);
  return <p>aaa</p>;
});
