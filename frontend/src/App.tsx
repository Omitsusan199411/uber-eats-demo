// 
import React, { VFC } from 'react';
import { BrowserRouter } from 'react-router-dom';

// コンポーネント
import './App.css';
import { Router } from "./router/Router";

export const App: VFC = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
