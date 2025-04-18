// import { AppBar, Toolbar, Typography, Box, IconButton, TextField, MenuItem, Select, SelectChangeEvent } from "@mui/material";
// import { ShoppingCart, Favorite } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const categories = ["All Categories", "Electronics", "Clothing", "Home Appliances", "Books", "Toys"];

// const Navbar = ({ onSearch, onFilter }: { onSearch: (query: string) => void; onFilter: (category: string) => void }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");

//   // Handle category change
//   const handleCategoryChange = (event: SelectChangeEvent) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     onFilter(category);
//   };

//   // Handle search input change
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     onSearch(query);
//   };

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000" }}>
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
//         {/* Left: Logo */}
//         <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
//           eShop
//         </Typography>

//         {/* Middle: Filter & Search */}
//         <Box sx={{ display: "flex", gap: 2 }}>
//           {/* Category Filter */}
//           <Select size="small" value={selectedCategory} onChange={handleCategoryChange} sx={{ minWidth: 150 }}>
//             {categories.map((category) => (
//               <MenuItem key={category} value={category}>
//                 {category}
//               </MenuItem>
//             ))}
//           </Select>

//           {/* Search Bar */}
//           <TextField 
//             size="small" 
//             placeholder="Search products..." 
//             value={searchQuery} 
//             onChange={handleSearchChange} 
//           />
//         </Box>

//         {/* Right: Cart & Wishlist */}
//         <Box>
//           <IconButton component={Link} to="/wishlist">
//             <Favorite color="primary" />
//           </IconButton>
//           <IconButton component={Link} to="/cart">
//             <ShoppingCart color="primary" />
//           </IconButton>
//         </Box>

//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  MenuItem,
  Select,
  SelectChangeEvent,
  Badge,
} from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { useCart } from "../../shared/context/CartContext";
import { useWishlist } from "../../shared/context/WishlistContext";
import api from "../../shared/utils/api";

export type NavbarData={
  name:string
}

export const Navbar = ({ onSearch, onFilter }: { onSearch: (query: string) => void; onFilter: (category: string) => void }) => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [categories, setCategories] = useState<string[]>(["All Categories"]);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.getAllCategories();
        setCategories(["All Categories", ...response]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  // Handle category change
  const handleCategoryChange = (event: SelectChangeEvent) => {
    const category = event.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  // Debounced Search Function
  const debouncedSearch = debounce((query: string) => {
    onSearch(query);
  }, 300);

  // Handle search input change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff", color: "#000" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        {/* Left: Logo */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          eShop
        </Typography>

        {/* Middle: Filter & Search */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Category Filter */}
          <Select size="small" value={selectedCategory} onChange={handleCategoryChange} sx={{ minWidth: 150 }}>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>

          {/* Search Bar */}
          <TextField size="small" placeholder="Search products..." value={searchQuery} onChange={handleSearchChange} />
        </Box>

        {/* Right: Cart & Wishlist */}
        <Box>
          <IconButton component={Link} to="/wishlist">
            <Badge badgeContent={wishlistCount} color="error">
              <Favorite color="primary" />
            </Badge>
          </IconButton>
          <IconButton component={Link} to="/cart">
            <Badge badgeContent={cartCount} color="error">
              <ShoppingCart color="primary" />
            </Badge>
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};


