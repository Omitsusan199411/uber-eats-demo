// コンポーネント
import { Restaurants } from "../components/pages/Restaurants";
import { Foods } from "../components/pages/Foods";
import { Page404 } from "../components/pages/Page404";


export const restaurantsRouter = [
  {
    path: "/",
    exact: true,
    chidlren: <Restaurants />
  },
  {
    path: "/:restaurants_id/foods",
    exact: false,
    children: <Foods />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];