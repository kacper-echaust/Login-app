import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from 'react';

type AuthContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
