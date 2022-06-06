import { setCookie } from "nookies";
import React from "react";
import api, { baseApi } from "../../services/api";
import { SignInPayload, User, UserContextSchema } from "./auth.types";

import Router from 'next/router';

export const AuthContext = React.createContext<UserContextSchema>(
  {} as UserContextSchema
);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);

  const isAuthenticated = !!user;

  const signIn = async ({ username, password }: SignInPayload) => {
    const { token, user } = await api.postSignIn({
      username,
      password
    })

    setCookie(undefined, 'animes_token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    });

    baseApi.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/watching');
  };

  React.useEffect(() => {
    // fazer a request pra pegar os dados a partir do token
  }, [])


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
