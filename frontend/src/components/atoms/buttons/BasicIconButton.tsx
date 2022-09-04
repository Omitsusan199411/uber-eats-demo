// ライブラリ import
import { VFC, memo } from "react";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

export const BasicIconButton: VFC = memo(() => {
  return <CustomBasicIconButton></CustomBasicIconButton>;
});

export const CustomBasicIconButton = styled(IconButton)`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
