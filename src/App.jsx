/* eslint-disable no-nested-ternary */
import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register/index";
import { PrivateRoute, UnPrivateRoute } from "./services/Route";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        <Route path="/" element={<UnPrivateRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
