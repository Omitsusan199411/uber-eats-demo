// ライブラリ import
import { createContext, Dispatch, SetStateAction } from 'react';

// 型 import
import { UserSignInResponseState } from '../../types/api/User';

export const UserSignInContext = createContext(
  {} as {
    userSignInState: UserSignInResponseState;
    setUserSignInState: Dispatch<SetStateAction<UserSignInResponseState>>;
  }
);
