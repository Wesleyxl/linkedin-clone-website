/* eslint-disable no-nested-ternary */
import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Footer from "./layouts/Footer/index";
import Header from "./layouts/Header/index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />

      {/* remove Header on these routes */}
      {window.location.pathname !== "/login" ? (
        window.location.pathname !== "/register" ? (
          <Header />
        ) : null
      ) : null}

      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Switch>

      {/* remove Footer on these routes */}
      {/* {window.location.pathname !== "/login" ? (
        window.location.pathname !== "/register" ? (
          <Footer />
        ) : null
      ) : null} */}
    </BrowserRouter>
  );
}

export default App;
