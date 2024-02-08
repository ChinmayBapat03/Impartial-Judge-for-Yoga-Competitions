import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Competitions from "./Competitions";
import Leaderboard from "./Leaderboard";
import Registration from "./Registration";
import Login from "./Login";
import Live from "./Live";
// import { AuthProvider } from "./auth";
import Navbar from "./NavigationBar";

const App = () => {
  return (
    <>
      {/* <AuthProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/live" element={<Live />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      {/* </AuthProvider> */}
    </>
  );
};

export default App;
