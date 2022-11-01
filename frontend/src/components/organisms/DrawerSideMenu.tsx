// ライブラリ import
import { VFC, memo, Dispatch, SetStateAction, useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Drawer,
  Divider,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// コンポーネント import
import { BasicIconButton } from "../atoms/buttons/BasicIconButton";

// 定数 import
import { DRAWER_WIDTH } from "../../constants/constants";

// createContext import
import { ResponsiveWide } from "../../App";

type DrawerSideMenuProps = {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerSideMenu: VFC<DrawerSideMenuProps> = memo((props) => {
  const { drawerOpen, setDrawerOpen } = props;
  const isWide = useContext(ResponsiveWide);

  return (
    <>
      {isWide ? (
        <Drawer
          anchor={"left"}
          open={drawerOpen}
          variant={"temporary"}
          onClose={() => {
            setDrawerOpen(!drawerOpen);
          }}
          PaperProps={{
            style: {
              width: `${DRAWER_WIDTH}`,
              borderRight: "1px solid #F4F5F7",
              paddingLeft: "10px",
              paddingRight: "10px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              mt: "20px",
              pb: "10px",
            }}
          >
            <BasicIconButton
              onClick={() => {
                setDrawerOpen(!drawerOpen);
              }}
              sx={{ mr: "5px" }}
            >
              <ArrowBackIosNewIcon />
            </BasicIconButton>
          </Box>
          <Divider variant="middle" />
          <List sx={{ mt: "20px", mb: "20px" }}>
            <ListItem disablePadding sx={{ display: "block" }}>
              {[...Array.from(Array(12).keys())].map((e: number, i: number) => (
                <ListItemButton key={i}>
                  <ListItemText primary={`カテゴリー${e}`}></ListItemText>
                </ListItemButton>
              ))}
            </ListItem>
          </List>
          <Divider variant="middle" />
        </Drawer>
      ) : (
        <Drawer
          anchor={"left"}
          open={true}
          variant={"persistent"}
          PaperProps={{
            style: {
              width: `${DRAWER_WIDTH}`,
              borderRight: "1px solid #F4F5F7",
              paddingTop: "70px",
              paddingLeft: "10px",
              paddingRight: "10px",
            },
          }}
        >
          <Divider variant="middle" />
          <List sx={{ mt: "20px", mb: "20px" }}>
            <ListItem disablePadding sx={{ display: "block" }}>
              {[...Array.from(Array(40).keys())].map((e: number, i: number) => (
                <ListItemButton key={i}>
                  <ListItemText primary={`カテゴリー${e}`}></ListItemText>
                </ListItemButton>
              ))}
            </ListItem>
          </List>
          <Divider variant="middle" />
        </Drawer>
      )}
    </>
  );
});
