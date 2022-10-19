// ライブラリ import
import { VFC, memo } from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";

export const Home: VFC = memo(() => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: "basis.light",
          minHeight: "100vh",
        }}
      ></Box>
      <Footer />
    </>
  );
});
