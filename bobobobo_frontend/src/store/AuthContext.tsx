import { createContext, useContext } from "react"

export type UserType = {
  username: string
}

export type AuthContextType = {
  isAuthenticated: boolean
  user: UserType | null
  token: string | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  token: null,
  login: () => Promise.resolve(),
  logout: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = (
  { children }: { children: React.ReactNode }
) => {
  return (
    <AuthContext.Provider value={{
      isAuthenticated: false,
      user: null,
      token: null,
      login: () => Promise.resolve(),
      logout: () => {},
    }}>
      {children}
    </AuthContext.Provider>
  )
}