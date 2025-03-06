import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import Navbar from "../../entity/Navbar/Navbar";
import Footer from "../../entity/Footer/Footer";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar onSearch={setSearchQuery} onFilter={setSelectedCategory} /> // incomplete
      <Container sx={{ flex: 1, padding: 2 }}>
        <Outlet context={{ searchQuery, selectedCategory }} />
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
