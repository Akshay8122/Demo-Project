// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Userland from "./component/Userland";
import User from "../src/component/User";
import LoginPage from "./component/LoginPage";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userland />} />
        <Route path="user" element={<User />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
