import "./App.css";
 import { Routes, Route } from "react-router-dom";
import Footer from "./component/Common/Footer";
import Header from "./component/Common/Header";
import MainCompo from "./component/LandingPage/MainCompo";
import Home from "./pages/Home";
import Comapre from "./pages/Comapre";
import WishList from "./pages/WishList";
import Dashboard from "./pages/Dashboard";
import Coins from "./component/Coins/Coins";

import Compare from "./pages/Comapre";
function App() {
  return (
<div>
 <Routes>
  <Route path ="/" element ={<Home/>}/>
  <Route path ="/compare" element ={<Compare/>}/>
  <Route path ="/wishlist" element ={<WishList/>}/>
  <Route path ="/dashboard" element ={<Dashboard/>}/>
  <Route path ="/coin/:id" element ={<Coins/>}/>
 </Routes>

</div>

 
  );
}

export default App;
