import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import HomePage from "./compnent/HomePage";
import Create from "./compnent/Create";
import Login from "./compnent/Login";
import Signup from "./compnent/Signup";
import Private from "./layout/Private";
import View from "./compnent/View";
import Update from "./compnent/Update";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Private />}>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/view-user" element={<View />} />
            <Route path="/create-user" element={<Create />} />
            <Route path="/update-user/:id" element={<Update />} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
