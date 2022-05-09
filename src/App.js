import Home from './pages/home/home.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import {  Route, Redirect,Routes  } from "react-router-dom";


import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
