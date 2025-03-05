"use client";

import React, { useState } from "react";
import profile from "../../../public/profile1.svg";
import hub from "../../../public/hub.svg";
import shoppingCart from "../../../public/shopping-cart.svg";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-6 border-b-1 border-[#E4E4E7]">
      <h1 className=" font-bold text-2xl cursor-pointer">Stellar Market</h1>

      <div className="hidden md:block">
        <div className="flex justify-between items-center space-x-10">
          <p className=" font-semibold cursor-pointer">Explore</p>
          <Image
            className="w-[22px] cursor-pointer"
            src={profile}
            alt="icon img"
          />
          <Image className="w-[22px] cursor-pointer" src={hub} alt="icon img" />
          <Image
            className="w-[22px] cursor-pointer"
            src={shoppingCart}
            alt="icon img"
          />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-between space-x-6 items-center">
          <h1 className=" cursor-pointer">Login</h1>
          <button className="border-1 py-2 px-4 cursor-pointer rounded">
            Register
          </button>
        </div>
      </div>

      <div onClick={toggleNav} className="block md:hidden cursor-pointer">
        <MenuIcon />
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={toggleNav}
        >
          <div
            className="fixed top-0 right-0 w-[80%] h-full bg-white shadow-lg p-6 transform translate-x-0 transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <X
                className="cursor-pointer text-gray-600 hover:text-gray-900"
                size={24}
                onClick={toggleNav}
              />
            </div>

            <div className="space-y-6">
              <h1 className="font-bold text-2xl mb-6">Stellar Market</h1>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Menu</h2>
                <ul className="space-y-4">
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Explore
                  </li>
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Login
                  </li>
                  <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                    Register
                  </li>
                </ul>
              </div>

              <div className="space-y-4 mt-6">
                <h2 className="text-lg font-semibold">Quick Access</h2>
                <div className="flex justify-between items-center">
                  <Image
                    className="w-[22px] cursor-pointer"
                    src={profile}
                    alt="Profile"
                  />
                  <Image
                    className="w-[22px] cursor-pointer"
                    src={hub}
                    alt="Hub"
                  />
                  <Image
                    className="w-[22px] cursor-pointer"
                    src={shoppingCart}
                    alt="Shopping Cart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
