// import ライブラリ
import { VFC, memo } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const SideMenu: VFC = memo(() => {
  return (
    <Box
      component="nav"
      sx={{
        minWidth: "280px",
        minHeight: "100vh",
        p: "10px",
        backgroundColor: "primary.main",
        display: { xs: "none", md: "block" },
      }}
    >
      <List>
        <ListItem disablePadding sx={{ display: "block" }}>
          {[...Array.from(Array(12).keys())].map((e: number, i: number) => (
            <ListItemButton key={i}>
              <ListItemText primary={`カテゴリー${e}`}></ListItemText>
            </ListItemButton>
          ))}
        </ListItem>
      </List>
    </Box>
  );
});
