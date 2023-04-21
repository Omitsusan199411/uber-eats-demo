// ライブラリ import
import { VFC, useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// コンポーネント import
import './App.css';
import './GoogleFonts.css';
import { MaterialUiTheme } from './theme/MaterialUiTheme';
import { Router } from './router/Router';

// createContext import
import { ResponsiveWide } from './contexts/ResponsiveWide';
import { UserSignInContext } from './contexts/users/UserSignInContext';

// 型 import
import { UserSignInResponseState } from './types/api/User';

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
