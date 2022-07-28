// ライブラリ import
import { memo, VFC } from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";

type CountUpProps = {
  CountUp: () => void;
};

export const CountUpButton: VFC<CountUpProps> = memo((props) => {
  const { CountUp } = props;
  return (
    <CustomIconButton onClick={CountUp} sx={{ p: "15px" }}>
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
