import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Product from "../../pages/Product";
import Cart from "../../pages/Cart";
import Wishlist from "../../pages/Wishlist";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
