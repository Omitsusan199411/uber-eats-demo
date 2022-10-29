// ライブラリ import
import { VFC, memo } from "react";
import { Box } from "@mui/material";

export const CopyRightText: VFC = memo(() => {
  return (
    <Box
      component="p"
      sx={{
        fontSize: "12px",
        textAlign: "center",
        color: "primary.main",
        mt: "20px",
      }}
    >
      © 2022 フードデリバリー・TechEats
    </Box>
  );
});
