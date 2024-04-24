/* eslint-disable react/prop-types */
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../util/firebaseConfig";

const MainContext = createContext({});
export default MainContext;

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //   console.log(user);
      setUser(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  return (
    <MainContext.Provider value={{ user }}>{children}</MainContext.Provider>
  );
};
