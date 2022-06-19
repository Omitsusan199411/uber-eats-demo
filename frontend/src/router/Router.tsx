// ライブラリ
import React, { VFC, memo } from "react";
import { Switch, Route } from "react-router-dom";

// コンポーネント
import { Home } from "../components/pages/Home";
import { Restaurants } from "../components/pages/Restaurants";
import { Foods } from "../components/pages/Foods";
import { Orders } from "../components/pages/Orders";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/restaurants" render={({ match: { params } }) => (
        <Switch>
          <Route exact path="/:restaurantsId/foods">
            <Foods params={`${params}`}/>
          </Route>
        </Switch>
      )}>
        <Restaurants />
      </Route>
      <Route exact path="/foods">
        <Foods />
      </Route>
      <Route exact path="/orders">
        <Orders />
      </Route>
      <Route path="*">
        <p>404ページ</p>
      </Route>
    </Switch>
  ); 
});