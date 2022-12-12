// ライブラリ
import React, { VFC, memo } from 'react';
import { Switch, Route } from 'react-router-dom';

// コンポーネント
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Page500 } from '../components/pages/Page500';
import { usersAuthRouter } from './UsersAuthRouter';
import { restaurantsRouter } from './RestaurantsRouter';
import { ordersRouter } from './OrdersRouter';

export const Router: VFC = memo(() => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route
      path="/usersAuth"
      render={({ match: { url } }) => (
        <Switch>
          {usersAuthRouter.map((route) => (
            <Route key={route.id} path={`${url}${route.path}`} exact={route.exact}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )}
    />
    {/* レンダリングする関数(render)はReact Routerのpropsを受け取れる。受け取れるオブジェクトはmatch、location、history */}
    {/* RouteのpathとURLのローケーション(aタグ href属性)の値が一致するとrender（props）の引数にmatchオブジェクトが渡せる。
      matchオブジェクトの中のurlは一致したURL、つまり「/restaurants」が値として代入されている */}
    <Route
      path="/restaurants"
      render={({ match: { url } }) => (
        <Switch>
          {restaurantsRouter.map((route) => (
            <Route key={route.id} path={`${url}${route.path}`} exact={route.exact}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )}
    />
    <Route
      path="/orders"
      render={({ match: { url } }) => (
        <Switch>
          {ordersRouter.map((route) => (
            <Route key={route.id} path={`${url}${route.path}`} exact={route.exact}>
              {route.children}
            </Route>
          ))}
        </Switch>
      )}
    />
    <Route path="/page500">
      <Page500 />
    </Route>
    <Route path="*">
      <Page404 />
    </Route>
  </Switch>
));
