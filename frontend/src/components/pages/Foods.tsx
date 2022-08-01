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
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

// コンポーネントimport
import { useAuthFoods } from "../../hooks/api/useAuthFoods";
import { Header } from "../templates/Header";
import { FoodsCard } from "../organisms/foods/FoodsCard";
import { FoodDetailModal } from "../organisms/foods/FoodDetailModal";
import { NewFoodReplaceModal } from "../organisms/foods/NewFoodReplaceModal";

// 型import
import { Food, FoodModal } from "../../types/api/Food";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";

// createContext(FoodModalContext)定義(as以下はFoodModalContextの型定義)
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
    existingRestaurant: "",
    newRestaurant: "",
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
  }, []);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: "#F4F5F7",
          height: "100%",
        }}
      >
        <Box
          component="article"
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "space-around",
          }}
        >
          <Box
            component="nav"
            sx={{
              mt: "150px",
              p: "20px",
              width: "18%",
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                {[...Array.from(Array(12).keys())].map(
                  (e: number, i: number) => (
                    <ListItemButton key={i}>
                      <ListItemText primary={`カテゴリー${e}`}></ListItemText>
                    </ListItemButton>
                  )
                )}
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              mt: "150px",
              width: { xs: "45%", sm: "60%", md: "70%" },
              backgroundColor: "#F4F5F7",
              pl: { xs: "0px", sm: "30px", md: "50px" },
              pr: { xs: "0px", sm: "30px", md: "50px" },
            }}
          >
            {foodsState.fetchStatus === REQUEST_STATE.loading ? (
              <>
                <Grid container spacing={2} justifyContent="center">
                  {/* ...Array(20).keys()とすることで0~19の値を配列として代入できる。keys()がない場合はundefinedが20個配列として格納される */}
                  {[...Array.from(Array(20).keys())].map((index: number) => (
                    <Grid item xs={12} sm={12} md={6} key={index}>
                      <Skeleton
                        variant="rectangular"
                        animation="wave"
                        width="100%"
                        height="10vh"
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            ) : (
              <Grid container spacing={2} justifyContent="center">
                {foodsState.foodsList.map((food: Food, index: number) => (
                  <Grid item xs={12} sm={12} md={6} key={index}>
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
            )}
          </Box>
        </Box>
        <FoodModalContext.Provider
          value={{ FoodModalState, setFoodModalState }}
        >
          {FoodModalState.isFoodModalOpen && <FoodDetailModal />};
          {FoodModalState.isFoodReplaceModalOpen && <NewFoodReplaceModal />}
        </FoodModalContext.Provider>
      </Box>
    </>
  );
});
