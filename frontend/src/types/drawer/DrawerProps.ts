// ライブラリ import
import { Dispatch, SetStateAction } from "react";

export type DrawerProps = {
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
};
