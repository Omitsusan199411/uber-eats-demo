// コンポーネント
import { Restaurants } from "../components/pages/Restaurants";
import { Foods } from "../components/pages/Foods";
import { Page404 } from "../components/pages/Page404";


export const restaurantsRouter = [
  {
    id: 1,
    path: "/",
    exact: true,
    children: <Restaurants />
  },
  {
    id: 2,
    path: "/:restaurants_id/foods",
    exact: false,
    children: <Foods />
  },
  {
    id: 3,
    path: "*",
    exact: false,
    children: <Page404 />
  }
];