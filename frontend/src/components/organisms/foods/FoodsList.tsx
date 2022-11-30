// import ライブラリ
import { VFC, memo } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// import コンポーネント
import { FoodsCard } from '../../molecules/foods/FoodsCard';

// import 型
import { Food, FoodListProps } from '../../../types/api/Food';

// 定数 import
import { DRAWER_WIDTH } from '../../../constants/constants';

export const FoodsList: VFC<FoodListProps> = memo((props) => {
  const { foodsList, setFoodModalState } = props;
  return (
    <Box
      component="article"
      sx={{
        minHeight: '100vh',
        p: { xs: '10px', md: '30px' },
        pt: { xs: '30px' },
        ml: { xs: '0px', md: `${DRAWER_WIDTH}` }
      }}
    >
      <Box
        component="section"
        sx={{
          backgroundColor: 'basis.light',
          maxWidth: '1300px',
          m: '0 auto'
        }}
      >
        <Box
          sx={{
            width: '100%',
            mb: '30px',
            p: '30px',
            color: 'basis.main',
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: 'primary.main',
            borderRadius: '4px'
          }}
        >
          {foodsList[0].restaurant.name}の商品一覧
        </Box>
        <Grid container spacing={{ xs: 0, sm: 1, md: 2 }} component="ul" sx={{ width: '100%', p: '0px' }}>
          {foodsList.map((food: Food) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={food.id} component="li" sx={{ listStyle: 'none' }}>
              <FoodsCard
                foodInfo={food}
                onClickFood={() => {
                  setFoodModalState({
                    isFoodModalOpen: true,
                    isFoodReplaceModalOpen: false,
                    selectedFood: food,
                    selectedFoodCount: 1,
                    existingRestaurant: '',
                    newRestaurant: ''
                  });
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
});
