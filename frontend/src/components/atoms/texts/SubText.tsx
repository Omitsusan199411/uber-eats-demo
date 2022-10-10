// ライブラリ import
import Box from "@mui/material/Box";

// 型imort
import { SubTextType } from "../../../types/text/SubText";

export const SubText = (props: SubTextType) => {
  const { children } = props;
  return (
    <Box sx={{ color: "basis.sub", fontSize: "14px", display: "block" }}>
      {children}
    </Box>
  );
};
