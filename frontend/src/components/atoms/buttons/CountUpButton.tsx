// ライブラリ import
import { memo, VFC } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";

export const CountUpButton: VFC = memo(() => {
  return (
    <CustomIconButton>
      <AddCircleIcon fontSize="large" sx={{ color: "#aaaaaa" }} />
    </CustomIconButton>
  );
});

export const CustomIconButton = styled(IconButton)`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
