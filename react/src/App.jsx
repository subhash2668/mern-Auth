import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Profile from "../Profile";


export default function App() {
  return (
<BrowserRouter>
  <Routes> 
    <Route path="/" element={<Home/>} />
    <Route path="/About" element={<About />} />
    <Route path="/SignIn" element={<SignIn />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/profile" element={<Profile/>} />
  </Routes>     
</BrowserRouter>

);
}