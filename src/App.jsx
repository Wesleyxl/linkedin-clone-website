/* eslint-disable no-nested-ternary */
import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Header from "./layouts/Header/index";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register/index";
import { PrivateRoute, UnPrivateRoute } from "./services/Route";
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
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<h1>logout</h1>} />
        </Route>

        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
