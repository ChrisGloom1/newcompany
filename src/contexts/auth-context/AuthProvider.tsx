import { createContext, useState } from "react"

const AuthContext = createContext({})

// TODO: Define type for setAuth

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<Object>({})

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext