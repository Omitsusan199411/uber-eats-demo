// ライブラリimport
import { memo, VFC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// 型import
import { FoodsCardProps } from "../../../types/api/Food";

// 画像import
import foodImage from "../../../images/foods/food-image.jpg";

export const FoodsCard: VFC<FoodsCardProps> = memo((props) => {
  const { foodInfo, onClickFood } = props;

  return (
    <CardStyle
      sx={{
        width: "100%",
        borderRadius: "6px",
        display: { xs: "block", sm: "flex" },
      }}
      onClick={onClickFood}
    >
      <CardMedia
        component="img"
        image={foodImage}
        alt="foodImage"
        sx={{ width: { xs: "100%", sm: "35%" } }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: "16px" }}>{foodInfo.name}</Typography>
        <Typography sx={{ fontSize: "14px" }}>￥{foodInfo.price}</Typography>
      </CardContent>
    </CardStyle>
  );
});

const CardStyle = styled(Card)`
  &:hover {
    cursor: pointer;
  }
`;
