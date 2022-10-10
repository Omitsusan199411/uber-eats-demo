// ライブラリ import
import { VFC, memo } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import LocalMalllcon from "@mui/icons-material/LocalMall";

// コンポーネント import
import { MainTitle } from "../atoms/MainTitle";

export const Header: VFC = memo(() => {
  return (
    <>
      <AppBar position="sticky" color="primary" sx={{ top: "0px" }}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100vw",
              padding: "4px 24px",
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
                    display: { xs: "none", sm: "inline" },
                    fontSize: { sm: "25px", md: "28px" },
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
