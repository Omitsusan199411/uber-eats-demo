// import ライブラリ
import { VFC, memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Box, Grid } from '@mui/material';

// import コンポーネント
import { RestaurantsCard } from '../../molecules/restaurants/RestaurantsCard';

// 型import
import { Restaurant, RestaurantsListProps } from '../../../types/api/Restaurant';

// 定数 import
import { DRAWER_WIDTH } from '../../../constants/constants';

const RestaurantLink = styled(Link)`
  text-decoration: none;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const RestaurantsList: VFC<RestaurantsListProps> = memo((props) => {
  const { restaurantsList } = props;

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
          店舗一覧
        </Box>
        <Grid container spacing={{ xs: 0, sm: 1, md: 2 }} component="ul" sx={{ width: '100%', p: '0px' }}>
          {/* 取得したrestaurantsListの配列をmapメソッドで処理し、JSX構文を含む新たな配列の形で返し、一覧を表示する */}
          {/* 「() => ()」の書き方でreturn文を省略している */}
          {/* react-domでは、「<タグ>{配列}<タグ>」と記述することで要素を展開し、一覧を表示できる */}
          {restaurantsList.map((restaurant: Restaurant) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={restaurant.id} component="li" sx={{ listStyle: 'none' }}>
              <RestaurantLink to={`/restaurants/${restaurant.id}/foods`}>
                <RestaurantsCard restaurant={restaurant} />
              </RestaurantLink>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
});
