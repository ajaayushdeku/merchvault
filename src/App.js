import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CustomizeProduct from "./CustomizeProduct";
import { createContext } from "react";
import axios from "axios";
import ArtistDashboard from "./components/artistdashboard/Dashboard";
import UserDashboard from "./components/userdashboard/Dashboard";
import ArtistInfo from "./components/artistdashboard/ArtistInfo";
import ProductSection from "./components/artistdashboard/ProductSection";
import UserProfile from "./components/userdashboard/UserProfile";
import UserOrder from "./components/userdashboard/UserOrder";

const MyContext = createContext();

const App = () => {
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const values = { isHeaderFooterShow, setisHeaderFooterShow };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <MyContext.Provider value={values}>
          {isHeaderFooterShow === true && <Header />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customize" element={<CustomizeProduct />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/artistdash" element={<ArtistDashboard />} />
            <Route path="/artistinfo" element={<ArtistInfo />} />
            <Route path="/productsection" element={<ProductSection />} />

            <Route path="/userdash" element={<UserDashboard />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/orderlist" element={<UserOrder />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          {isHeaderFooterShow === true && <Footer />}
        </MyContext.Provider>
      </Router>
    </ThemeProvider>
  );
};

export default App;

export { MyContext };
