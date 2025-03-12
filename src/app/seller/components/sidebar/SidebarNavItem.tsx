import React from "react";
import dashboard from "../../../../../public/dashboard.svg";
import person1 from "../../../../../public/profile1.svg";
import Image from "next/image";
import analytics from "../../../../../public/analytics.svg";
import billing from "../../../../../public/billing.svg";
import chat from "../../../../../public/chat.svg";
import dollar from "../../../../../public/dollar.svg";
import help from "../../../../../public/help.svg";
import invoices from "../../../../../public/invoices.svg";
import products from "../../../../../public/products.svg";
// import sellerStar from "../../../../../public/seller-star.svg";
import setting from "../../../../../public/setting.svg";
import supportTick from "../../../../../public/supportTick.svg";
import { MenuSection, MenuItem } from "@/app/types/sidebar";
import { useSideBar } from "../context/sidebarContext";
import { Menu, X } from "lucide-react";

export const sidebarData: MenuSection[] = [
  {
    title: "OVERVIEW",
    items: [
      {
        icon: <Image src={person1} alt="icon" />,
        label: "Profile",
        id: "profile",
      },
      {
        icon: <Image src={dashboard} alt="icon" />,
        label: "Dashboard",
        id: "dashboard",
      },
      {
        icon: <Image src={analytics} alt="icon" />,
        label: "Analytics",
        id: "analytics",
      },
      {
        icon: <Image src={products} alt="icon" />,
        label: "Products",
        id: "products",
      },
    ],
  },
  {
    title: "FINANCE",
    items: [
      {
        icon: <Image src={dollar} alt="icon" />,
        label: "Transactions",
        id: "transactions",
      },
      {
        icon: <Image src={invoices} alt="icon" />,
        label: "Invoices",
        id: "invoices",
      },
      {
        icon: <Image src={billing} alt="icon" />,
        label: "Billing",
        id: "billing",
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      { icon: <Image src={chat} alt="icon" />, label: "Chat", id: "chat" },
      {
        icon: <Image src={supportTick} alt="icon" />,
        label: "Support Tickets",
        id: "tickets",
      },
      { icon: <Image src={help} alt="icon" />, label: "FAQ", id: "faq" },
    ],
  },
];

const bottomSideBarItems: MenuItem[] = [
  {
    icon: <Image src={setting} alt="icon" />,
    label: "Settings",
    id: "settings",
  },
  {
    icon: <Image src={help} alt="icon" />,
    label: "Help",
    id: "help",
  },
];

const SidebarNavItem: React.FC<{
  isOpen: boolean;
  toggleSidebar: () => void;
}> = ({ isOpen, toggleSidebar }) => {
  const { activeComponent, setActiveComponent } = useSideBar();
  return (
    <>
      <button
        className="md:hidden p-2 fixed top-12 left-5 bg-gray-100 rounded-full z-50 shadow"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      <div
        className={`fixed md:relative top-0 left-0 h-full bg-white w-72 py-6 border-r border-[#E4E4E7] transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex flex-col z-40 shadow-lg md:shadow-none`}
      >
        {sidebarData.map((section, index) => (
          <div key={index} className="mb-6 px-6">
            <h3 className="mb-3 text-base  font-semibold text-gray-800">
              {section.title}
            </h3>
            <ul className="my-1">
              {section.items.map((item, idx) => {
                return (
                  <li key={idx}>
                    <span
                      className={`flex cursor-pointer rounded items-center my-1  px-5 py-3 text-sm transition-colors ${
                        activeComponent == item.id
                          ? "bg-gray-200 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveComponent(item.id)}
                    >
                      <span className="mr-4 text-gray-600">{item.icon}</span>
                      <span className="text-black text-base">{item.label}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div className="mt-auto pt-6 px-5 border-t border-[#E4E4E7] w-full">
          <ul className="mt-1">
            {bottomSideBarItems.map((item, idx) => (
              <li key={idx} className="mt-3">
                <span
                  className={`flex w-full cursor-pointer rounded items-center py-3 px-5 text-sm transition-colors ${
                    activeComponent == item.id
                      ? "bg-gray-200 font-medium"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveComponent(item.id)}
                >
                  <span className="mr-3 text-gray-600">{item.icon}</span>
                  <span className="text-black text-base">{item.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarNavItem;
