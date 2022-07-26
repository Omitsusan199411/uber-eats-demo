// ライブラリ import
import { memo, VFC } from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { CountUpButton } from "../../atoms/buttons/CountUpButton";
import { CountDownButton } from "../../atoms/buttons/CountDownButton";
import { QuantityField } from "../../atoms/fields/QuantityField";

export const CountForm: VFC = memo(() => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CountUpButton />
      <QuantityField />
      <CountDownButton />
    </Box>
  );
});
