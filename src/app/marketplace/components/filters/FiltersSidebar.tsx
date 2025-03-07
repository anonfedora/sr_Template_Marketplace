import React from "react";
import CategoryFilter from "./CategoryFilter";
import PriceRangeSlider from "./PriceRangeSlider";
import SortDropdown from "./SortDropdown";
import RatingFilter from "./RatingFilter";

const FiltersSidebar = () => {
  return (
    <div className="sm:w-[25%] hidden md:block pl-6 md:pl-12 pr-6 py-4">
      <div className="border border-[#E4E4E7] rounded-lg p-4">
        <h1 className="mb-8 text-2xl font-semibold">Filters</h1>

        <div>
          <CategoryFilter />
          <PriceRangeSlider />
          <SortDropdown />
          <RatingFilter />
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
