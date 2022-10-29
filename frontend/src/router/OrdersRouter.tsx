import { Orders } from "../components/pages/Orders";
import { OrdersPage204 } from "../components/pages/OrdersPage204";

export const ordersRouter = [
  {
    id: 1,
    path: "/",
    exact: true,
    children: <Orders />,
  },
  {
    id: 2,
    path: "/page204",
    exact: false,
    children: <OrdersPage204 />,
  },
];
