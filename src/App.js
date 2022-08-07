import Home from './pages/home/home.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {  Route, Redirect,Routes  } from "react-router-dom";

import './App.css'
// test
function App() {
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
