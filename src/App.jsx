import React from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Layout from "./componentes/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-backgroud text-foreground bg-amber-950">
      <Routes>
        <Route path="/" element={<Navigate to="/Login" replace />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />

        <Route element={<Layout />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
