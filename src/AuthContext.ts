import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from './firebase';

// const AuthContext = createContext("defaultValue");

// export function useAuthContext() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children: any }) {
//   const [user, setUser] = useState('');

//   const value = {
//     user,
//   };

//   useEffect(() => {
//     const unsubscribed = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => {
//       unsubscribed();
//     };
//   }, []);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }