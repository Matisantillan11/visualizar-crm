import React, {createContext, useReducer} from 'react';
import {api} from '@/utils/lib/api/axios.config';
import {authInitialState, authReducer} from './auth.reducer';
import config from '@/config/dev-local.config'

type AuthContextProps = {
  login: (email: string, password: string) => void;
  /*register: () => void;
  logout: () => void; */
  result: any;
  error: boolean;
  status: 'fetching' | 'fetched' | 'error' | 'initial';
  message: string;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const login = async (email: string, password: string) => {
    if (email !== '' && password !== '') {
      dispatch({type: 'LOGIN_PENDING'});
      const payload = await api.post(`/auth/login/${config.db}`, {email, password});

      if (payload.data.status !== 404 && payload.data.status !== 500) {
        return dispatch({
          type: 'LOGIN_FULLFILLED',
          payload: {
            result: payload.data.result,
            status: 'fetched',
            message: payload.data.message,
            error: payload.data.error,
          },
        });
      } else {
        return dispatch({
          type: 'LOGIN_REJECTED',
          payload: {
            result: payload.data.result,
            status: 'error',
            message: payload.data.message,
            error: payload.data.error,
          },
        });
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
