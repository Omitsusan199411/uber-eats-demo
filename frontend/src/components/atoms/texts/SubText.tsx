// ライブラリ import
import Box from "@mui/material/Box";

// 型imort
import { SubTextType } from "../../../types/text/SubText";

export const SubText = (props: SubTextType) => {
  const { children } = props;
  return <Box sx={{ color: "info", fontSize: "14px" }}>{children}</Box>;
};
