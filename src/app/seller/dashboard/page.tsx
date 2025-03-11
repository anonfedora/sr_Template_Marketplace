"use client";

import React from "react";
import SellerSidebar from "../components/sidebar/SellerSidebar";
import StoreOverview from "../components/overview/StoreOverview";

import { useSideBar } from "../components/context/sidebarContext";

const Page = () => {
  const { activeComponent } = useSideBar();

  function renderComponent() {
    switch (activeComponent) {
      case "profile":
        return "profile";
        break;
      case "dashboard":
        return <StoreOverview />;
        break;
      case "analytics":
        return "analytics ";
        break;
      case "products":
        return "products";
        break;
      default:
        return <StoreOverview />;
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <SellerSidebar />
      <section className="flex-1 p-4">{renderComponent()}</section>
    </div>
  );
};

export default Page;
