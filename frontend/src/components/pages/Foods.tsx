// ライブラリimport
import {
  VFC,
  memo,
  useEffect,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

// コンポーネントimport
import { useAuthFoods } from "../../hooks/api/useAuthFoods";
import { Header } from "../templates/Header";
import { Footer } from "../templates/Footer";
import { FoodsCard } from "../organisms/foods/FoodsCard";
import { FoodDetailModal } from "../organisms/foods/FoodDetailModal";
import { NewFoodReplaceModal } from "../organisms/foods/NewFoodReplaceModal";

// 型import
import { Food, FoodModal } from "../../types/api/Food";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";

// createContext(FoodModalContext)定義(as以下はFoodModalContextの型定義)
// Dispatchはvoidを返す
export const FoodModalContext = createContext(
  {} as {
    FoodModalState: FoodModal;
    setFoodModalState: Dispatch<SetStateAction<FoodModal>>;
  }
);

export const Foods: VFC = memo(() => {
  // food Modalの初期State
  const FoodModalInitialState: FoodModal = {
    isFoodModalOpen: false,
    isFoodReplaceModalOpen: false,
    selectedFood: {},
    selectedFoodCount: 1,
    existingRestaurant: null,
    newRestaurant: null,
  };
  // food一覧を取得 カスタムフック
  const { fetchFoods, foodsState } = useAuthFoods();

  // react hooks（useParams）は必ず関数コンポーネント本体のトップレベルで呼び出すこと
  const { restaurant_id } = useParams<{ restaurant_id: string }>();

  // food Modal用のuseState
  const [FoodModalState, setFoodModalState] = useState<FoodModal>(
    FoodModalInitialState
  );

  // food一覧を表示
  useEffect(() => {
    fetchFoods(restaurant_id);
  }, [restaurant_id]);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: "basis.light",
          minHeight: "100vh",
          m: "0 auto",
          pt: "30px",
          pl: { xs: "0px", sm: "0px", md: "10px" },
          pr: { xs: "0px", sm: "0px", md: "10px" },
        }}
      >
        <Box
          component="article"
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: { md: "center" },
          }}
        >
          {foodsState.fetchStatus === REQUEST_STATE.loading && (
            <>
              <Backdrop open={true}>
                <CircularProgress color="primary" thickness={5.0} />
              </Backdrop>
            </>
          )}
          {foodsState.fetchStatus === REQUEST_STATE.ok && (
            <>
              <Box
                component="nav"
                sx={{
                  minWidth: "280px",
                  minHeight: "100vh",
                  p: "10px",
                  backgroundColor: "primary.main",
                  display: { xs: "none", md: "block" },
                }}
              >
                <List>
                  <ListItem disablePadding sx={{ display: "block" }}>
                    {[...Array.from(Array(12).keys())].map(
                      (e: number, i: number) => (
                        <ListItemButton key={i}>
                          <ListItemText
                            primary={`カテゴリー${e}`}
                          ></ListItemText>
                        </ListItemButton>
                      )
                    )}
                  </ListItem>
                </List>
              </Box>
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
                  {foodsState.foodsList[0].restaurant.name}の商品一覧
                </Box>
                <Grid
                  container
                  spacing={{ xs: 0, sm: 1, md: 2 }}
                  component="ul"
                  sx={{ width: "100%", p: "0px" }}
                >
                  {foodsState.foodsList.map((food: Food, index: number) => (
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
                        onClickFood={() =>
                          setFoodModalState({
                            isFoodModalOpen: true,
                            isFoodReplaceModalOpen: false,
                            selectedFood: food,
                            selectedFoodCount: 1,
                            existingRestaurant: "",
                            newRestaurant: "",
                          })
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Footer />
      <FoodModalContext.Provider value={{ FoodModalState, setFoodModalState }}>
        {FoodModalState.isFoodModalOpen && <FoodDetailModal />}
        {FoodModalState.isFoodReplaceModalOpen && <NewFoodReplaceModal />}
      </FoodModalContext.Provider>
    </>
  );
});
