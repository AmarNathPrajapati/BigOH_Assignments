import React from "react";
import { CartContainer, CartItemCard, CartImage, CartDetails, RemoveButton } from "./styles.components";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../shared/context/CartContext";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <CartContainer>
      <Typography variant="h4">🛒 Your Cart</Typography>

      {cart.length === 0 ? (
        <Typography variant="h6" style={{ textAlign: "center", marginTop: "20px" }}>
          Your cart is empty 😔
        </Typography>
      ) : (
        cart.map((item) => (
          <CartItemCard key={item.id}>
            <CartImage src={item.thumbnail} alt={item.title} />
            <CartDetails>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">${item.price}</Typography>
              <Typography variant="body2">{item.description.slice(0, 50)}...</Typography>
              <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
            </CartDetails>
          </CartItemCard>
        ))
      )}

      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Continue Shopping 🛍️
      </Button>
    </CartContainer>
  );
};

export default Cart;
