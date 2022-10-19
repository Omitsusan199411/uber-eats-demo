// import ライブラリ
import { VFC, memo } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// import コンポーネント
import { FoodsCard } from "../../molecules/foods/FoodsCard";
import { SideMenu } from "../SideMenu";

// import 型
import { Food, FoodListProps } from "../../../types/api/Food";

export const FoodsList: VFC<FoodListProps> = memo((props) => {
  const { foodsList, setFoodModalState } = props;
  return (
    <>
      <Box
        component="article"
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: { md: "center" },
        }}
      >
        <SideMenu />
        <Box
          component="section"
          sx={{
            maxWidth: "1200px",
            backgroundColor: "basis.light",
            pb: { xs: "150px", sm: "300px" },
            pl: { xs: "0px", sm: "0px", md: "50px" },
            pr: { xs: "0px", sm: "0px", md: "15px" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              mb: "30px",
              p: "30px",
              color: "basis.main",
              fontWeight: "bold",
              textAlign: "center",
              backgroundColor: "primary.main",
              borderRadius: "4px",
            }}
          >
            {foodsList[0].restaurant.name}の商品一覧
          </Box>
          <Grid
            container
            spacing={{ xs: 0, sm: 1, md: 2 }}
            component="ul"
            sx={{ width: "100%", p: "0px" }}
          >
            {foodsList.map((food: Food, index: number) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                key={index}
                component="li"
                sx={{ listStyle: "none" }}
              >
                <FoodsCard
                  foodInfo={food}
                  onClickFood={() => {
                    setFoodModalState({
                      isFoodModalOpen: true,
                      isFoodReplaceModalOpen: false,
                      selectedFood: food,
                      selectedFoodCount: 1,
                      existingRestaurant: "",
                      newRestaurant: "",
                    })
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
});
