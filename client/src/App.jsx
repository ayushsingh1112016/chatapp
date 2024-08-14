import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import { useAuth } from "./contexts/AuthContext";

const App = () => {
  const { authUser } = useAuth();
  return (
    <div
      data-theme="dark"
      className="min-h-screen flex items-center justify-center overflow-hidden bg-[#075E54] text-[#EDEDED]"
    >
      <Routes>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            background: "#25D366", // WhatsApp green for the background
            borderRadius: "32px",
            color: "white", // White text
          },
        }}
      />
    </div>
  );
};

export default App;
