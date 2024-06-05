import { createContext, useEffect } from "react";
import { app } from "../FireBase/firebace.config";
import {
  EmailAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
} from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
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

  const passwordChange = async (currentPassword,newPassword) => {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
      setMessage('Password changed successfully.');
    } catch (error) {
      console.log(error);
      handleErrors(error);
    }
  };
  // error handle 
  const handleErrors = (error) => {
        setMessage(`Error: ${error.message}`);
    }

console.log(message);

  // logout 
  const logOut = () => {
    return signOut(auth).then(() => setUser(null));
  };

  // get user 

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
    setLoder,
    passwordChange
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
