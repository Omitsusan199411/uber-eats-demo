// ライブラリ import
import { VFC, memo, useContext } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import LocalMalllcon from "@mui/icons-material/LocalMall";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// コンポーネント import
import { MainTitle } from "../atoms/titles/MainTitle";

// 型 import
import { DrawerProps } from "../../types/drawer/DrawerProps";

import { DRAWER_WIDTH } from "../../constants/constants";

// createContext import
import { ResponsiveWide } from "../../App";

export const Header: VFC<DrawerProps> = memo((props) => {
  const { drawerOpen, setDrawerOpen } = props;
  const isWide = useContext(ResponsiveWide);
  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        elevation={2}
        sx={{
          top: "0px",
          width: { xs: "100%", md: `calc(100% - ${DRAWER_WIDTH})` },
          ml: { xs: "0px", md: ` ${DRAWER_WIDTH}` },
        }}
      >
        <Toolbar>
          {isWide && (
            <IconButton
              onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}
            >
              <MenuOpenIcon />
            </IconButton>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100vw",
              padding: "4px 12px",
            }}
          >
            <Link to={`/restaurants`} style={{ textDecoration: "none" }}>
              <MainTitle />
            </Link>
            <Box>
              <Link to={`/orders`}>
                <LocalMalllcon
                  color="secondary"
                  sx={{
                    fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
});
