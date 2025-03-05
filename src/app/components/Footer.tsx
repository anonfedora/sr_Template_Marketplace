import Link from "next/link";
import React from "react";

// const footerData = [
//   {
//     title: "About StellarMarket",
//     who: "Who we are",
//     how: "How it works",
//     feat: "Stellar and cryptocurrencies",
//   },
//   {
//     title: "Support",
//     who: "Help Center",
//     how: "Contact Us",
//     feat: "Privacy Policy",
//   },
//   {
//     title: "Connect with Us",
//     who: "Twitter",
//     how: "Facebook",
//     feat: "Instagram",
//   },
// ];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F5] border-1 border-[#E4E4E7] py-8">
      <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold mb-4">About StellarMarket</h4>
          <ul className="space-y-2 text-[#71717A]">
            <li>
              <Link href="#" className="hover:text-gray-800 transition-colors">
                Who we are
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                How it works
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Stellar and cryptocurrencies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2 text-[#71717A]">
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect with Us</h4>
          <ul className="space-y-2 text-[#71717A]">
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className=" hover:text-gray-800 transition-colors">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-500">
        © 2025 StellarMarket. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
