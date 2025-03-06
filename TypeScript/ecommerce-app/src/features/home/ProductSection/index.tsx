import { useEffect, useRef, useState } from "react";
import api from "../../../shared/utils/api";
import Pagination from "../../../shared/utils/Pagination";
import { Product } from "../../../shared/types";
import { Container, ProductGrid, ProductCard, Image, Title, Price, PaginationContainer, Button, AddToCartButton, AddToWishlistButton, RemoveFromCartButton, RemoveFromWishlistButton } from "./styles.components";
import { useCart } from "../../../shared/context/CartContext";
import { useWishlist } from "../../../shared/context/WishlistContext";

export const ProductSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pageOffset, setPageOffset] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pagination = useRef(new Pagination(1));
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductRef = useRef<HTMLDivElement | null>(null);

  const { cart, addToCart, removeFromCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();


  useEffect(() => {
    fetchProducts(1, pageOffset);
  }, [pageOffset]);

  useEffect(() => {
    if (!lastProductRef.current) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && currentPage < totalPages) {
          fetchProducts(currentPage + 1, pageOffset);
        }
      },
      { threshold: 1.0 }
    );

    observer.current.observe(lastProductRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [products]);

  const fetchProducts = async (page: number, offset: number) => {
    try {
      const skip = (page - 1) * offset;
      const response = await api.fetchAllProducts(offset, skip);
      setProducts((prev) => [...prev, ...response.products]);
      setTotalPages(Math.ceil(100 / offset));
      pagination.current = new Pagination(totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <Container>
      <div>
        <label>Products Per Page:</label>
        <select
          value={pageOffset}
          onChange={(e) => {
            setProducts([]);
            setPageOffset(Number(e.target.value));
          }}
        >
          {[10, 20, 50, 100].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <ProductGrid>
        {products.map((product, index) => {
          const isInCart = cart.some((item) => item.id === product.id);
          const isInWishlist = wishlist.some((item) => item.id === product.id);

          return (
            <ProductCard key={product.id} ref={index === products.length - 1 ? lastProductRef : null}>
              <Image src={product.thumbnail} alt={product.title} />
              <Title>{product.title}</Title>
              <Price>${product.price}</Price>

              {/* Cart Button */}
              {isInCart ? (
                <RemoveFromCartButton onClick={() => removeFromCart(product.id)}>Remove from Cart</RemoveFromCartButton>
              ) : (
                <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
              )}

              {/* Wishlist Button */}
              {isInWishlist ? (
                <RemoveFromWishlistButton onClick={() => removeFromWishlist(product.id)}>Remove from Wishlist</RemoveFromWishlistButton>
              ) : (
                <AddToWishlistButton onClick={() => addToWishlist(product)}>❤️ Add to Wishlist</AddToWishlistButton>
              )}
            </ProductCard>
          );
        })}
      </ProductGrid>
        
      <PaginationContainer>
        <Button disabled={currentPage === 1} onClick={() => fetchProducts(pagination.current.prevPage(), pageOffset)}>
          Prev
        </Button>
        {pagination.current.getPages().map((page, index) => (
          <Button key={index} disabled={page === currentPage} onClick={() => typeof page === "number" && fetchProducts(page, pageOffset)}>
            {page}
          </Button>
        ))}
        <Button disabled={currentPage === totalPages} onClick={() => fetchProducts(pagination.current.nextPage(), pageOffset)}>
          Next
        </Button>
      </PaginationContainer>
    </Container>
  );
};

