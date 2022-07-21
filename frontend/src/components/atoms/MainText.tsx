// ライブラリimport
import Box from "@mui/material/Box";

// 型import
import { MainTextType } from "../../types/text/MainText";

export const MainText = (props: MainTextType) => {
  const { children } = props;
  return <Box sx={{ fontFamily: "Roboto", fontSize: "16px" }}>{children}</Box>;
};
