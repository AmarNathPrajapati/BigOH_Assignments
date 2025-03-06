import { styled } from "@mui/material"; 
// import { styled } from "@mui/system"; 

export const Container = styled("div")({
  width: "100%",
  maxWidth: "1200px",
  margin: "auto",
  padding: "20px",
});

export const ProductGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
});

export const ProductCard = styled("div")({
  border: "1px solid #ddd",
  padding: "10px",
  textAlign: "center",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
});

export const Image = styled("img")({
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
});

export const Title = styled("h2")({
  fontSize: "16px",
  fontWeight: "bold",
  margin: "10px 0",
});

export const Price = styled("p")({
  fontSize: "14px",
  color: "#28a745",
  fontWeight: "bold",
});

export const PaginationContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
});

export const Button = styled("button")({
  margin: "5px",
  padding: "8px 12px",
  border: "none",
  background: "#007bff",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  "&:disabled": {
    background: "#ddd",
    cursor: "not-allowed",
  },
});
export const ButtonBase = styled("button")({
  margin: "5px",
  padding: "10px 16px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  background: "transparent",
  border: "2px solid #007bff",
  color: "#007bff",
  "&:hover": {
    background: "#007bff",
    color: "white",
  },
  "&:active": {
    transform: "translateY(1px)",
  },
  "&:disabled": {
    border: "2px solid #ddd",
    color: "#ddd",
    cursor: "not-allowed",
    background: "transparent",
  },
});

export const AddToCartButton = styled(ButtonBase)({});

export const AddToWishlistButton = styled(ButtonBase)({
  border: "2px solid #28a745",
  color: "#28a745",
  "&:hover": {
    background: "#28a745",
    color: "white",
  },
});

// Remove Buttons
export const RemoveFromCartButton = styled(ButtonBase)({
  border: "2px solid #dc3545",
  color: "#dc3545",
  "&:hover": {
    background: "#dc3545",
    color: "white",
  },
});

export const RemoveFromWishlistButton = styled(ButtonBase)({
  border: "2px solid #ffc107",
  color: "#ffc107",
  "&:hover": {
    background: "#ffc107",
    color: "black",
  },
});