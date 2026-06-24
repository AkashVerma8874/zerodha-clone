import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import ProductPage from "./landing_page/product/ProuctPage";
import NotFound from "./landing_page/NotFound"
import SignupPage from "./landing_page/signup/SignupPage";
import Login from "./landing_page/signup/Login";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={< SignupPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />}/>
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage/>} />
        <Route path="/*" element={<NotFound/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
