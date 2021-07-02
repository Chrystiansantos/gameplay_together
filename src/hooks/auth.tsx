import React, { createContext, ReactNode, useContext, useState } from 'react'
import * as AuthSession from 'expo-auth-session';
import { SCOPE, CLIENT_ID, CDN_IMAGE, REDIRECT_URI, RESPONSE_TYPE } from '../config/index'
import { api } from '../services/api';

type IAuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  }
}

interface IUser {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string
}

interface IAuthContextData {
  user: IUser;
  loading: boolean;
  signIn: () => Promise<void>
}

interface IAuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async () => {
    try {
      setLoading(true);
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { params, type } = await AuthSession.startAsync({ authUrl }) as IAuthorizationResponse;
      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;
        const userInfo = await api.get('/users/@me');
        const [firstName] = userInfo.data.username.split(' ');
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`

        setUser({
          ...userInfo.data,
          token: params.access_token,
          firstName,
        })
      }
    } catch (error) {
      console.log(error);
      throw new Error('Não foi possível autenticar')
    } finally {
      setLoading(false)
    }

  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  return useContext(AuthContext);
}

export {
  AuthProvider,
  useAuth
}