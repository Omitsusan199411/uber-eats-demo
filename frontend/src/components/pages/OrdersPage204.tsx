import { VFC, memo } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const OrdersPage204: VFC = memo(() => {
  return (
    <>
      <Box sx={{ fontSize: "32px" }}>
        現在登録している仮注文はございません。204page
      </Box>
      <Link to={"/"}>ホームページへ</Link>
    </>
  );
});
