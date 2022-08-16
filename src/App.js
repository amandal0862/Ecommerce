import react, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Home from './pages/home/home.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Redirect, Routes } from "react-router-dom";
// Auth 
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth, onAuthStateChanged } from "./firebase";

import './App.css'
// test
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  /* @params userAuth -> userAuth: User | null */

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
