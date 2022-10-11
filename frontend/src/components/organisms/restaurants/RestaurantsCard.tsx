// ライブラリ import
import { VFC, memo } from "react";
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
    <Card elevation={1} sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        src={RestaurantImage}
        alt="restaurantImage"
        sx={{ width: "30%" }}
      />
      <CardContent sx={{ width: "100%" }}>
        <Typography>{restaurant.name}</Typography>
        <Typography>配送料¥{restaurant.fee}</Typography>
      </CardContent>
    </Card>
  );
});
