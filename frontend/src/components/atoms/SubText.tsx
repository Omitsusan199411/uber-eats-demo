// ライブラリ import
import Box from "@mui/material/Box";

// コンポーネント import
import "../../GoogleFont.css";

// 型imort
import { SubTextType } from "../../types/text/SubText";

export const SubText = (props: SubTextType) => {
  const { children } = props;
  return (
    <Box sx={{ fontFamily: "Roboto", color: "#708090", fontSize: "14px" }}>
      {children}
    </Box>
  );
};
