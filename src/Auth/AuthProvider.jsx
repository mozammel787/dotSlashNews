import { createContext, useEffect } from "react";
import { app } from "../FireBase/firebace.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loder, setLoder] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const ragistation = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const gitHubLogIn = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const logOut = () => {
    return signOut(auth).then(() => setUser(null));
  };
  useEffect(() => {
    const unsascribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoder(false);
      } else {
        setLoder(false);
      }
    });
    return () => unsascribe();
  }, []);

  const userInfo = {
    googleLogin,
    gitHubLogIn,
    ragistation,
    logIn,
    user,
    loder,
    logOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
