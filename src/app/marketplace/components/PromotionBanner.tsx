import React from "react";

const PromotionBanner = () => {
  return (
    <div className="bg-black text-white w-full px-8 md:px-12 py-4">
      <h1 className="font-bold text-2xl">
        Summer Sale: Up to 50% off on selected items!
      </h1>
      <p className="text-[#FAFAFA]">Use code SUMMER50 at checkout</p>
    </div>
  );
};

export default PromotionBanner;
