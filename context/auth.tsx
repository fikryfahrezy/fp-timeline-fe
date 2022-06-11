/**
 * Ref: Auth Example
 * https://reactrouter.com/docs/en/v6/examples/auth
 */

import { createContext, useContext, useState, useEffect } from 'react';
import User from '@/model/user';

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };

interface AuthContextType {
  user: User | null;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: JSX.Element }) {
  let [user, setUser] = useState<User | null>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      const user = new User(newUser, Math.random() > 0.5);

      setUser(user);
      window.localStorage.setItem('username', newUser);

      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      window.localStorage.removeItem('username');

      callback();
    });
  };

  let value = { user, signin, signout };

  useEffect(() => {
    const username = window.localStorage.getItem('username');
    if (typeof username === 'string') {
      const user = new User(username, Math.random() > 0.5);

      setUser(user);
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
