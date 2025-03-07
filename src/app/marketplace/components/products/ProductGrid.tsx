import React from "react";
import ProductCard from "./ProductCard";
import { Products } from "@/app/types/products";

const ProductGrid: React.FC<{ products: Products[] }> = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
