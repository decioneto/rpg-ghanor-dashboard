import { createContext, ReactNode, useState } from 'react';

interface UserData {
  id: string;
  username: string;
  role: string;
}

interface AuthContextProps {
  user: UserData | undefined;
  handleSignIn: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ chidren }: { chidren: ReactNode }) {
  const [user, setUser] = useState<UserData>();

  function handleSignIn() {}

  return (
    <AuthContext.Provider value={{ user, handleSignIn }}>
      {chidren}
    </AuthContext.Provider>
  );
}
