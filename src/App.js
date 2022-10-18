import React from "react";
import { Route, Routes } from "react-router-dom";
import SplashLoader from "./components/SplashLoader/SplashLoader";
import { LoginScreen, RegisterScreen } from "./screens";
const App = () => {
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<SplashLoader />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
};

export default App;
