// ライブラリ
import React, { VFC, memo } from "react";
import { Switch, Route } from "react-router-dom";

// コンポーネント
import { Home } from "../components/pages/Home";
import { Foods } from "../components/pages/Foods";
import { Orders } from "../components/pages/Orders";
import { Page404 } from "../components/pages/Page404";
import { restaurantsRouter } from "./RestaurantsRouter";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/restaurants" render={({ match: { url } }) => (
        <Switch>
          {restaurantsRouter.map((route) => (
            <Route key={route.id}  path={`${url}${route.path}`} exact={route.exact}>
              {route.children}
            </Route>
          ))}
        </Switch>
        )}
      />
      <Route path="/foods">
        <Foods />
      </Route>
      <Route path="/orders">
        <Orders />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  ); 
});