import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home/HomePage";
import RegisterPage from "./views/Register/RegisterPage";
import LoginPage from "./views/Login/LoginPage";
import { LoginProvider } from "./Context/LoginContext";
import ExpansionPage from "./views/Expansions/ExpansionPage";
import UserProfilePage from "./views/UserProfile/UserProfilePage";
import LorePage from "./views/Lore/LorePage";


const App = () => {
  return (
    <BrowserRouter>
      <LoginProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/expansions" element={<ExpansionPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/collection" element={<></>} />
          <Route path="/lore" element={<LorePage />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
};

export default App;
