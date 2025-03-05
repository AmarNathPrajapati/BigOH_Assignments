import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/HomePage";
import Login from "../../pages/LoginPage";
import Signup from "../../pages/SignupPage";
import Product from "../../pages/ProductPage";
import Cart from "../../pages/CartPage";
import Wishlist from "../../pages/WishlistPage";
import Layout from "../layout/Layout";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
