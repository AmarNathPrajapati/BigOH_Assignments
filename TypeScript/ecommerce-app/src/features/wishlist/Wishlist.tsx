import React from "react";
import { WishlistContainer, WishlistItemCard, WishlistImage, WishlistDetails, RemoveButton } from "./styles.components";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../shared/context/WishlistContext";

const Wishlist: React.FC = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  return (
    <WishlistContainer>
      <Typography variant="h4">💖 Your Wishlist</Typography>

      {wishlist.length === 0 ? (
        <Typography variant="h6" style={{ textAlign: "center", marginTop: "20px" }}>
          Your wishlist is empty 😢
        </Typography>
      ) : (
        wishlist.map((item) => (
          <WishlistItemCard key={item.id}>
            <WishlistImage src={item.thumbnail} alt={item.title} />
            <WishlistDetails>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1">${item.price}</Typography>
              <Typography variant="body2">{item.description.slice(0, 50)}...</Typography>
              <RemoveButton onClick={() => removeFromWishlist(item.id)}>Remove</RemoveButton>
            </WishlistDetails>
          </WishlistItemCard>
        ))
      )}

      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Browse More Products 🔍
      </Button>
    </WishlistContainer>
  );
};

export default Wishlist;
