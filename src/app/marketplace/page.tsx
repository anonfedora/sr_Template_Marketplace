import React from "react";
import PromotionBanner from "./components/PromotionBanner";
import MarketplaceHeader from "./components/MarketplaceHeader";
import FiltersSidebar from "./components/filters/FiltersSidebar";
import SearchBar from "./components/SearchBar";
import ProductBox from "./components/products/ProductBox";

const page = () => {
  return (
    <div>
      <PromotionBanner />
      <MarketplaceHeader />
      <SearchBar />
      <div className="min-h-screen space-x-2.5 max-h-full block md:flex overflow-hidden">
        <FiltersSidebar />
        <ProductBox />
      </div>
    </div>
  );
};

export default page;
