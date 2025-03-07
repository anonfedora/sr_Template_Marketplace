import React, { useEffect, useState } from "react";
import { Products } from "@/app/types/products";
import noLove from "../../../../../public/no-love.svg";
import Image from "next/image";
import noStar from "../../../../../public/no-star.svg";
import star from "../../../../../public/star.svg";
import { SkeletonCard } from "./ProductSkeleton";

const ProductCard: React.FC<{ product: Products }> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md border border-[#E4E4E7]">
      {isLoading ? (
        <SkeletonCard />
      ) : (
        <div className="h-48 bg-gray-200 rounded"></div>
      )}
      {/* Placeholder for image */}
      <div className="p-4">
        <div className="flex justify-between items-center pb-4 pt-1 ">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <Image className="cursor-pointer" src={noLove} alt="img icon" />
        </div>
        <span className="inline-block mt-4 bg-black text-white text-xs px-2 py-1 rounded">
          {product.category}
        </span>
        <p className="mt-2 font-semibold">{product.price} XLM</p>
        <div className="flex items-center space-x-0.5 mt-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < Math.floor(product.rating) ? (
                <Image className="cursor-pointer" src={star} alt="img icon" />
              ) : i === Math.floor(product.rating) &&
                product.rating % 1 >= 0.5 ? (
                <Image className="cursor-pointer" src={star} alt="img icon" />
              ) : (
                <Image className="cursor-pointer" src={noStar} alt="img icon" />
              )}
            </span>
          ))}

          <span className="ml-2">{product.rating}</span>
        </div>
        <button className="mt-3 cursor-pointer w-full bg-black text-white py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
