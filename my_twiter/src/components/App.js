import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import {authService} from "../fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => { 

  }, [])
  return(
  <> 
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} mytwiter</footer>  
  </>
  )
}

export default App