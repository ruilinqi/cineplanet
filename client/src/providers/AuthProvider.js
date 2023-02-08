import {createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const storedAuthEmail = window.localStorage.getItem("user_email")
  const storedAuthPasssword = window.localStorage.getItem("password")
  const parsedAuthEmail = JSON.parse(storedAuthEmail);
  const parsedAuthPassword = JSON.parse(storedAuthPasssword);

  const [auth, setAuth] = useState({user_email: parsedAuthEmail, password: parsedAuthPassword});

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;