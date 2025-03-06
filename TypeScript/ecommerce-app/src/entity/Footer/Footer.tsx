import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 2, backgroundColor: "#f5f5f5", marginTop: "auto" }}>
      <Typography variant="body2">© {new Date().getFullYear()} eShop. All rights reserved.</Typography>
    </Box>
  );
};

