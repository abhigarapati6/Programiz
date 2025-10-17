import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Python from "./Python";
import Java from "./Java";
import Sql from "./Sql";
import Mongo from "./Mongo";
import Js from "./Js";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Signup" element={<SignUp/>}></Route>
        <Route path="/Js" element={<Js/>}></Route>
        <Route path="/Python" element={<Python/>}></Route>
        <Route path="/Java" element={<Java/>}></Route>
        <Route path="/Sql" element={<Sql/>}></Route>
        <Route path="/Mongo" element={<Mongo/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App