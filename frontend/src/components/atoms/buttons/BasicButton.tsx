// ライブラリ import
import { memo, VFC } from "react";
// ButtonTypeMapはMaterial-uiがデフォルトで用意しているButtonタグの型定義（node_modules/@mui/material/Button/Button.d.ts）
import Button, { ButtonProps } from "@mui/material/Button";
import styled from "styled-components";

export const BasicButton: VFC<ButtonProps> = memo((props) => {
  const { color, variant, startIcon, sx, onClick, children } = props;
  return (
    <CustomBasicButton
      color={color}
      variant={variant}
      startIcon={startIcon}
      sx={sx}
      onClick={onClick}
    >
      {children}
    </CustomBasicButton>
  );
});

const CustomBasicButton = styled(Button)`
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
