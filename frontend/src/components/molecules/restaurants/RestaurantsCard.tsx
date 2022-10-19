// ライブラリ import
import { VFC, memo } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// 画像 import
import RestaurantImage from "../../../images/restaurants/restaurant-image.jpg";

// 型 import
import { RestaurantsCardProps } from "../../../types/api/Restaurant";

export const RestaurantsCard: VFC<RestaurantsCardProps> = memo((props) => {
  const { restaurant } = props;
  return (
    <CardStyle
      elevation={1}
      sx={{ display: "flex", minHeight: "120px", width: "100%" }}
    >
      <CardMedia
        component="img"
        src={RestaurantImage}
        alt="restaurantImage"
        sx={{ maxWidth: "140px" }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography sx={{ fontSize: "16px" }}>{restaurant.name}</Typography>
        <Typography sx={{ fontSize: "14px" }}>
          配送料¥{restaurant.fee}
        </Typography>
      </CardContent>
    </CardStyle>
  );
});

const CardStyle = styled(Card)`
  box-shadow: none;
  padding: 10px;
  border-radius: 0px;
  border-bottom: 1px solid #e5e7eb;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
