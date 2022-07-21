// ライブラリ import
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import LocalMalllcon from "@mui/icons-material/LocalMall";

// コンポーネント import
import { MainTitle } from "../atoms/MainTitle";

export const Header = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
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
                  sx={{
                    display: { xs: "none", sm: "inline" },
                    fontSize: { sm: "18px", md: "22px", lg: "24px" },
                    color: "#008000",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
