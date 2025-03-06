import React, { createContext, useContext, useState } from "react";

interface WishlistItem {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  description: string;
}

interface WishlistContextType {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    return JSON.parse(sessionStorage.getItem("wishlist") || "[]");
  });

  const addToWishlist = (item: WishlistItem) => {
    if (!wishlist.find((p) => p.id === item.id)) {
      setWishlist([...wishlist, item]);
      sessionStorage.setItem("wishlist", JSON.stringify([...wishlist, item]));
    }
  };

  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    sessionStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, wishlistCount: wishlist.length }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
