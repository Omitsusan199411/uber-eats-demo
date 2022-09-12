// ライブラリ import
import { VFC, memo, useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";

// コンポーネント import
import { useAuthLineFoodsGet } from "../../hooks/api/useAuthLineFoodsGet";
import { useAuthOrdersPost } from "../../hooks/api/useAuthOrdersPost";
import { OrderDetailModal } from "../organisms/orders/OrderDetailModal";
import { BasicLink } from "../atoms/buttons/BasicLink";

export const Orders: VFC = memo(() => {
  const { lineFoodsGet, lineFoodsGetData } = useAuthLineFoodsGet();
  const { ordersPost, ordersPostFlag } = useAuthOrdersPost();

  const [OrderModalFlagState, setOrderModalFlagState] =
    useState<boolean>(false);

  // カスタムフックの呼び出し
  // useEffectは第二引数に空の配列を指定すると初回のレンダリング後に実行される。第二引数を設定すると、設定した値が変更されたタイミングで実行される（デフォルト）
  // OrderModalStateの値(useState値)は次回のレンダリングの前に反映されるようになっている（デフォルト）
  useEffect(() => {
    lineFoodsGet();
    setOrderModalFlagState(!OrderModalFlagState);
  }, []);
  return (
    <>
      {lineFoodsGetData.fetchStatus === "loading" && (
        <Backdrop open={true}>
          <CircularProgress color="primary" thickness={5.0} />
        </Backdrop>
      )}
      {lineFoodsGetData.fetchStatus === "ok" &&
        ordersPostFlag.postStatus !== "ok" && (
          <OrderDetailModal
            lineFoodsList={lineFoodsGetData.lineFoodsList}
            postStatus={ordersPostFlag.postStatus}
            ordersPost={ordersPost}
            orderModalFlagState={OrderModalFlagState}
            setOrderModalFlagState={setOrderModalFlagState}
          />
        )}
      {lineFoodsGetData.fetchStatus === "ok" &&
        ordersPostFlag.postStatus === "ok" && (
          <Backdrop
            open={true}
            sx={{
              backgroundColor: "primary.sub",
            }}
          >
            <Box
              sx={{
                minWidth: { xs: "300px", sm: "500px" },
                backgroundColor: "primary.main",
                // border: "dashed 3px primary.sub",
                borderRadius: "4px",
              }}
            >
              <Box
                component="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "15px", sm: "18px" },
                  textAlign: "center",
                  mb: "50px",
                  mt: "100px",
                }}
              >
                注文予定の商品はありません
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: "100px",
                  fontSize: { xs: "15px", sm: "18px" },
                }}
              >
                <BasicLink to={"/"}>ホームページへ</BasicLink>
              </Box>
            </Box>
          </Backdrop>
        )}
    </>
  );
});
