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
      {/* レンダリングする関数(render)はReact Routerのpropsを受け取れる。受け取れるオブジェクトはmatch、location、history */}
      {/* RouteのpathとURLのローケーション(aタグ href属性)の値が一致するとrender（props）の引数にmatchオブジェクトが渡せる。
      matchオブジェクトの中のurlは一致したURL、つまり「/restaurants」が値として代入されている */}
      <Route
        path="/restaurants"
        render={({ match: { url } }) => (
          <Switch>
            {restaurantsRouter.map((route) => (
              <Route
                key={route.id}
                path={`${url}${route.path}`}
                exact={route.exact}
              >
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
