// ライブラリ import
import { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  onClick: () => void;
};