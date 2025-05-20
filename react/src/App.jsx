import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Profile from "../Profile";
import Header from "./components/Header";

export default function App() {
  return (
<BrowserRouter>
<Header/>
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