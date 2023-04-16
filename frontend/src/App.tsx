// ライブラリ import
import { VFC, useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Router } from './router/Router';

// コンポーネント import
import './App.css';
import './GoogleFonts.css';
import { MaterialUiTheme } from './theme/MaterialUiTheme';

// createContext import
import { ResponsiveWide } from './contexts/ResponsiveWide';
import { UserSignInContext } from './contexts/users/UserSignInContext';

// 型 import
import { UserSignInResponseState } from './types/api/User';

// Url import
import { usersSignedInUrl } from './urls/urlApi';

export const App: VFC = () => {
  // レスポンシブに伴う画面幅の切り替え指定
  const isWide: boolean = useMediaQuery({
    query: `(max-width: ${MaterialUiTheme.breakpoints.values.md}px`
  });

  // ユーザー認証状態を管理
  const [userSignInState, setUserSignInState] = useState<UserSignInResponseState>({
    email: '',
    name: '',
    sign_in_state: false
  });

  // useStateの値とset関数をメモ化し、useContextを使うコンポーネントに対して不要なレンダリングを防ぐ。
  const contextValue = useMemo(() => {
    return {
      userSignInState,
      setUserSignInState
    };
  }, [userSignInState, setUserSignInState]);

  // ユーザーのサインイン状態を毎回追跡（ページリロード後にもサインインしているユーザー情報を保持するため）
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
      });
  }, []);

  return (
    <ThemeProvider theme={MaterialUiTheme}>
      {/* CssBaselineでブラウザに設定された固有のcssをリセット */}
      <CssBaseline />
      <ResponsiveWide.Provider value={isWide}>
        <UserSignInContext.Provider value={contextValue}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </UserSignInContext.Provider>
      </ResponsiveWide.Provider>
    </ThemeProvider>
  );
};
