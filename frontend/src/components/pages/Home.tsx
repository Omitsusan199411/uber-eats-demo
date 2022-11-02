// ライブラリ import
import { VFC, memo, useState } from "react";
import Box from "@mui/material/Box";

// コンポーネント import
import { Header } from "../organisms/Header";
import { Footer } from "../organisms/Footer";
import { DrawerSideMenu } from "../organisms/DrawerSideMenu";

export const Home: VFC = memo(() => {
  // Drawerの開閉ステータス
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <>
      <Header drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <DrawerSideMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
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
