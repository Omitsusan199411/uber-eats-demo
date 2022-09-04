// ライブラリ import
import { memo, VFC } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

// コンポーネント import

export const BasicButton: VFC = memo(() => {
  return <CustomBasicButton></CustomBasicButton>;
});

export const CustomBasicButton = styled(Button)`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
