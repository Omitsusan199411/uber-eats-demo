// ライブラリ import
import { VFC, memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useMedia from "use-media";
import styled from "styled-components";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// コンポーネント import
import { MaterialUiTheme } from "../../theme/MaterialUiTheme";

export const Footer: VFC = memo(() => {
  const isWide = useMedia({
    minWidth: `${MaterialUiTheme.breakpoints.values.sm}`,
  });
  console.log(isWide);
  const history = useHistory();
  const [value, setValue] = useState<string>("/");
  return (
    <>
      {isWide ? (
        <Box
          component="footer"
          sx={{ backgroundColor: "basis.main", p: "50px" }}
        >
          <List>
            <ListItem divider={true}>
              <Link to={`{/}`}>Home</Link>
            </ListItem>
          </List>
        </Box>
      ) : (
        <BottomNavigation
          component="nav"
          showLabels={true}
          value={value}
          onChange={async (event, newValue) => {
            await setValue(newValue);
            console.log(newValue);
            history.push(newValue);
          }}
          sx={{
            backgroundColor: "basis.main",
            position: "fixed",
            bottom: "0px",
            width: "100%",
          }}
        >
          <BottomNavigationAction
            label="ホーム"
            icon={<HomeIcon />}
            value="/"
            sx={{ color: "primary.main" }}
          />
          <BottomNavigationAction
            label="店舗一覧"
            icon={<RestaurantIcon />}
            value="/restaurants"
            sx={{ color: "primary.main" }}
          />
          <BottomNavigationAction
            label="フード一覧"
            value="/foods"
            icon={<FastfoodIcon />}
            sx={{ color: "primary.main" }}
          />
          <BottomNavigationAction
            label="カートを見る"
            icon={<ShoppingCartIcon />}
            sx={{ color: "primary.main" }}
          />
        </BottomNavigation>
      )}
    </>
  );
});
