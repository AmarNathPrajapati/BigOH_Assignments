// import { useEffect, useRef, useState } from "react";
// import api from "../shared/utils/api";
// import Pagination from "../shared/utils/Pagination";
// import { Product } from "../shared/types";
// import { Box,  Grid  } from "@mui/material";
// import { WrapperStyled } from "./styles.compoents";

import Home from "../features/home/ProductSection";

// const Home = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [pageOffset, setPageOffset] = useState(20);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const pagination = useRef(new Pagination(1));
//   const observer = useRef<IntersectionObserver | null>(null);
//   const lastProductRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     fetchProducts(1, pageOffset);
//   }, [pageOffset]);

//   useEffect(() => {
//     if (!lastProductRef.current) return;

//     observer.current = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && currentPage < totalPages) {
//           fetchProducts(currentPage + 1, pageOffset);
//         }
//       },
//       { threshold: 1.0 }
//     );

//     observer.current.observe(lastProductRef.current);

//     return () => {
//       if (observer.current) observer.current.disconnect();
//     };
//   }, [products]);

//   const fetchProducts = async (page: number, offset: number) => {
//     try {
//       const skip = (page - 1) * offset;
//       const response = await api.fetchAllProducts(offset, skip);
//       setProducts((prev) => [...prev, ...response.products]);
//       setTotalPages(Math.ceil(100 / offset)); // Assume 100 total products
//       pagination.current = new Pagination(totalPages);
//       setCurrentPage(page);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Page Offset Selector */}
//       <div className="mb-4">
//         <label className="mr-2">Products Per Page:</label>
//         <select
//           value={pageOffset}
//           onChange={(e) => {
//             setProducts([]);
//             setPageOffset(Number(e.target.value));
//           }}
//           className="border p-2"
//         >
//           {[10, 20, 50, 100].map((num) => (
//             <option key={num} value={num}>
//               {num}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Product List */}
//       <Grid container spacing={2}>
//   {products.map((product) => (
//     <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
//       <WrapperStyled isWrapper>
//         <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
//         <h2>{product.title}</h2>
//         <p>${product.price}</p>
//       </WrapperStyled>
//     </Grid>
//   ))}
// </Grid>


//       {/* Pagination */}
//       <div className="flex justify-center mt-4">
//         <button
//           disabled={currentPage === 1}
//           onClick={() => fetchProducts(pagination.current.prevPage(), pageOffset)}
//           className="mr-2 p-2 border rounded"
//         >
//           Prev
//         </button>
//         {pagination.current.getPages().map((page, index) => (
//           <button
//             key={index}
//             disabled={page === currentPage}
//             onClick={() => typeof page === "number" && fetchProducts(page, pageOffset)}
            
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           disabled={currentPage === totalPages}
//           onClick={() => fetchProducts(pagination.current.nextPage(), pageOffset)}
//           className="ml-2 p-2 border rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;




const HomePage = () => {
  return <Home />;
};

export default HomePage;




