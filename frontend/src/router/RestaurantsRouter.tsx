// コンポーネント
import { Restaurants } from '../components/pages/Restaurants';
import { FoodsAsOneRestaurant } from '../components/pages/FoodsAsOneRestaurant';
import { Page404 } from '../components/pages/Page404';

export const restaurantsRouter = [
  {
    id: 1,
    path: '/',
    exact: true,
    children: <Restaurants />
  },
  {
    id: 2,
    path: '/:restaurantId/foods',
    exact: false,
    children: <FoodsAsOneRestaurant />
  },
  {
    id: 3,
    path: '*',
    exact: false,
    children: <Page404 />
  }
];
