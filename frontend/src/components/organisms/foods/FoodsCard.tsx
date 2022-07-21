// ライブラリimport
import { memo } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// 型import
import { Food } from "../../../types/api/Foods";

// 画像import
import foodImage from "../../../images/foods/food-image.jpg";

type FoodsMap = {
  foodInfo: Food;
};

export const FoodsCard = memo((props: FoodsMap) => {
  const { foodInfo } = props;
  return (
    <Card sx={{ manWidth: "180px", borderRadius: "6px" }}>
      <CardMedia
        component="img"
        height="170px"
        image={foodImage}
        alt="foodImage"
      />
      <CardContent>
        <Typography>{foodInfo.name}</Typography>
        <Typography>￥{foodInfo.price}</Typography>
      </CardContent>
    </Card>
  );
});
