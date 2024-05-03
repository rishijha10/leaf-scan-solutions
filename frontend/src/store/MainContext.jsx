/* eslint-disable react/prop-types */
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../util/firebaseConfig";

const MainContext = createContext({});
export default MainContext;

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //   console.log(user);
      setUser(user);
      setIsLoggedIn(true);
      // console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      setIsLoggedIn(false);
      // User is signed out
      // ...
    }
  });
  return (
    <MainContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </MainContext.Provider>
  );
};
