// コンポーネント import
import { VFC, memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type BasicLinkType = {
  children: ReactNode;
  to: string;
};

export const BasicLink: VFC<BasicLinkType> = memo((props) => {
  const { children, to } = props;
  return (
    <CustomBasicLink to={`${to}`}>
      <ArrowRightIcon />
      {children}
    </CustomBasicLink>
  );
});

const CustomBasicLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: #008000;
    font-weight: bold;
  }
`;
