// ライブラリimport
import { VFC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";

// コンポーネントimport
import { useAuthFoods } from "../../hooks/api/useAuthFoods";
import { Header } from "../templates/Header";
import { FoodsCard } from "../organisms/foods/FoodsCard";

// 型import
import { Food } from "../../types/api/Foods";

// 定数import
import { REQUEST_STATE } from "../../constants/constants";

export const Foods: VFC = memo(() => {
  // カスタムフック
  const { fetchFoods, foodsState } = useAuthFoods();
  // react hoolk社必ず関数コンポーネント本体のトップレベルで呼び出すこと
  const { restaurant_id } = useParams<{ restaurant_id: string }>();

  useEffect(() => {
    fetchFoods(restaurant_id);
  }, []);

  console.log(foodsState);

  const foodsListLength = foodsState.foodsList.length;

  console.log(foodsListLength);

  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          backgroundColor: "#F4F5F7",
          height: "100vh",
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
                {[...Array(12).keys()].map((e: number, i: number) => (
                  <ListItemButton key={i}>
                    <ListItemText primary={`カテゴリー${e}`}></ListItemText>
                  </ListItemButton>
                ))}
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              mt: "150px",
              width: "70%",
              backgroundColor: "#F4F5F7",
              pl: { sx: "0px", sm: "30px", md: "50px" },
              pr: { sx: "0px", sm: "30px", md: "50px" },
            }}
          >
            {foodsState.fetchStatus === REQUEST_STATE.loading ? (
              <>
                <Grid container spacing={2} justifyContent="center">
                  {[...Array(20).keys()].map((index: number) => (
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
                    <FoodsCard foodInfo={food} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
});
