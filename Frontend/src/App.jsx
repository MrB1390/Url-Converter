import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/register";
import Login from "./Components/login";
import Emailverify from "./Components/Emailverify";
import PasswordReset from "./Components/Passwordreset";
import { TokenProvider } from "./Components/TokenProvider";
import Urlpage from "./Components/urlPage";
import NavBar from "./Components/NavBar";
import Urltable from "./Components/Urltable";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <ToastContainer />
        </div>
        <TokenProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/add" element={<Register />} />
            <Route path="/verify" element={<Emailverify />} />
            <Route path="/reset-pass" element={<PasswordReset />} />
            <Route element={<NavBar />}>
              <Route path="/shorturl" element={<Urlpage />} />
              <Route path="/urltable" element={<Urltable />} />
            </Route>
          </Routes>
        </TokenProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
