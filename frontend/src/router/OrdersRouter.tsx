import { Orders } from '../components/pages/Orders';

export const ordersRouter = [
  {
    id: 1,
    path: '/',
    exact: true,
    children: <Orders />
  }
];
