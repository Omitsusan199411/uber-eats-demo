// ライブラリ import
import { VFC, memo } from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { Footer } from "../templates/Footer";

export const Home: VFC = memo(() => {
  return (
    <>
      <Box>Homeコンポーネント</Box>
      <Footer />
    </>
  );
});
