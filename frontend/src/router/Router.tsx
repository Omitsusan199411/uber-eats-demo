// ライブラリ
import { VFC, memo, useEffect, useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';

// コンポーネント
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Page500 } from '../components/pages/Page500';
import { usersAuthRouter } from './usersAuthRouter';
import { restaurantsRouter } from './restaurantsRouter';
import { ordersRouter } from './ordersRouter';

// 型 import
import { UserSignInResponseState } from '../types/api/User';

// Url import
import { usersSignedInUrl } from '../urls/urlApi';

// コンテキスト import
import { UserSignInContext } from '../contexts/users/UserSignInContext';

export const Router: VFC = memo(() => {
  // 以下、ユーザー認証情報の追跡
  const { userSignInState, setUserSignInState } = useContext(UserSignInContext);
  const history = useHistory();
  // レンダリング後におけるユーザーのサインイン状態を維持
  useEffect(() => {
    axios
      .get<UserSignInResponseState>(`${usersSignedInUrl}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setUserSignInState({
          ...userSignInState,
          email: res.data.email,
          name: res.data.name,
          sign_in_state: res.data.sign_in_state
        });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 500) {
          history.push('/page500');
        }
      });
  }, []);

  return (
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
  );
});
