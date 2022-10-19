// ライブラリ import
import { VFC, memo } from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import styled from "styled-components";

export const BasicIconButton: VFC<IconButtonProps> = memo((props) => {
  const { onClick, sx, disabled, children } = props;
  return (
    <CustomBasicIconButton onClick={onClick} sx={sx} disabled={disabled}>
      {children}
    </CustomBasicIconButton>
  );
});

const CustomBasicIconButton = styled(IconButton)`
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
