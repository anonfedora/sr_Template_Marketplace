"use client";

import React, { useState } from "react";
import ProductGrid from "./ProductGrid";
import { Products } from "@/app/types/products";
import Image from "next/image";
import menu from "../../../../../public/menu.svg";
import grid_box_icon from "../../../../../public/grid-box-icon.svg";
import Pagination from "./Pagination";

const mockProducts: Products[] = [
  {
    id: 1,
    name: "Stellar T-Shirt",
    category: "Clothing",
    price: 100,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Crypto Wallet",
    category: "Electronics",
    price: 200,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Blockchain Book",
    category: "Books",
    price: 150,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Mining Rig",
    category: "Electronics",
    price: 300,
    rating: 4.7,
  },
  { id: 5, name: "NFT Art Print", category: "Art", price: 250, rating: 4.6 },
  {
    id: 6,
    name: "Crypto Hoodie",
    category: "Clothing",
    price: 180,
    rating: 4.4,
  },
  {
    id: 7,
    name: "Virtual Land Deed",
    category: "Virtual Goods",
    price: 500,
    rating: 4.9,
  },
  {
    id: 8,
    name: "Rare Coin",
    category: "Collectibles",
    price: 1000,
    rating: 4.8,
  },
  {
    id: 9,
    name: "Crypto Mug",
    price: 80,
    category: "Merchandise",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Hardware Wallet",
    price: 350,
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Crypto Trading Guide",
    price: 120,
    category: "Books",
    rating: 3.9,
  },
  {
    id: 12,
    name: "Mining GPU",
    price: 800,
    category: "Electronics",
    rating: 4.7,
  },
  {
    id: 13,
    name: "Blockchain Stickers",
    price: 50,
    category: "Merchandise",
    rating: 4.1,
  },
  {
    id: 14,
    name: "Hardware Security Key",
    price: 220,
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 15,
    name: "NFT Creation Course",
    price: 450,
    category: "Education",
    rating: 4.4,
  },
  {
    id: 16,
    name: "Crypto Phone Case",
    price: 70,
    category: "Accessories",
    rating: 4.2,
  },
];

const ProductBox: React.FC = () => {
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pagination = (page: number) => setCurrentPage(page);
  const totalPages = Math.ceil(mockProducts.length / productsPerPage);

  return (
    <div className="w-full md:w-[75%] p-5 mr-6 md:mr-12">
      <div className="flex justify-between items-center  mb-4.5 mt-2">
        <h2 className="text-sm text-[#71717A] font-semibold">
          Showing {indexOfFirstProduct + 1}-
          {Math.min(indexOfLastProduct, mockProducts.length)} of{" "}
          {mockProducts.length} results
        </h2>
        <div className="flex items-center space-x-2.5   ">
          <span className=" border p-2.5 cursor-pointer border-[#E4E4E7] rounded">
            <Image className="cursor-pointer" src={menu} alt="img icon" />
          </span>

          <span className=" border p-2.5 cursor-pointer border-[#E4E4E7] rounded">
            <Image
              className="cursor-pointer"
              src={grid_box_icon}
              alt="img icon"
            />
          </span>
        </div>
      </div>

      <ProductGrid products={currentProducts} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pagination={pagination}
      />
    </div>
  );
};

export default ProductBox;
