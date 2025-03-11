import React from "react";
import boost from "../../public/boost.svg";
import efficient from "../../public/efficient.svg";
import high from "../../public/high.svg";
import rightArr from "../../public/right-arr.svg";
import Image from "next/image";
import Link from "next/link";

const powered = [
  {
    icon: <Image src={efficient} alt="img icon" />,
    title: "Efficient Development",
    info: "Leverage the power of Rust and our optimized templates for rapid, secure marketplace development",
  },
  {
    icon: <Image src={high} alt="img icon" />,
    title: "High Performance",
    info: `Experience blazing-fast transactions and responsive UI, thanks to our Rust-based infrastructure`,
  },
  {
    icon: <Image src={boost} alt="img icon" />,
    title: "Future-Proof",
    info: `Stay ahead with a platform built on the latest Rust technologies and blockchain advancements`,
  },
];

export default function Home() {
  return (
    <div className="">
      {/* Welcome to stellar Section */}
      <div className=" text-center px-6 py-16 sm:py-24 bg-linear-to-r from-[#f6f6f7] to-[#F4F4F5]">
        <h1 className=" font-bold text-4xl">Welcome to Stellar Market</h1>
        <p className=" py-6 text-xl text-[#71717A]">
          The future of e-commerce, powered by Stellar blockchain technology
        </p>
        <Link href={"/marketplace"}>
          <button className="bg-black mt-4 mb-2 text-white py-3 px-5 cursor-pointer rounded">
            Explore Products
          </button>
        </Link>
      </div>

      {/* Why Choose Stellar Market Section */}
      <div className="text-left md:text-center px-6 py-16">
        <h1 className=" font-bold text-3xl text-center">
          Why Choose StellarMarket?
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 mt-10 justify-between items-center">
          <div className=" flex flex-col">
            <h1 className=" font-semibold text-xl pb-5">Secure</h1>
            <p className=" text-[#71717A] text-base">
              Transactions backed by Stellar blockchain technology for
              unparalleled security
            </p>
          </div>

          <div>
            <h1 className=" font-semibold text-xl pb-5">Fast</h1>
            <p className=" text-[#71717A] text-base">
              Instant payments and quick settlements across borders
            </p>
          </div>

          <div>
            <h1 className=" font-semibold text-xl pb-5">Global</h1>
            <p className=" text-[#71717A] text-base">
              Buy and sell anywhere in the world without boundaries
            </p>
          </div>
        </div>
      </div>

      {/* Powered by Scaffold Rust Section */}
      <div className="bg-[#F4F4F5] px-6 py-16 text-center">
        <h1 className=" text-3xl font-bold">Powered by Scaffold Rust</h1>
        <p className="text-xl w-full md:w-[597px] mx-auto pt-11 pb-7">
          StellarMarket is built using cutting-edge Scaffold Rust templates,
          created by a leading company in blockchain development tooling.
        </p>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 items-center">
          {powered.map((items, i) => {
            return (
              <div
                key={i}
                className="bg-white w-fit p-6 md:pr-28 rounded-lg border-1 border-[#E4E4E7] md:mt-4 my-2 md:mb-10 text-left"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <span>{items.icon}</span>
                  <h1 className="text-2xl font-semibold">{items.title}</h1>
                </div>
                <p className="mt-6">{items.info}</p>
              </div>
            );
          })}
        </div>

        <div className="flex mx-auto items-center mt-8 border-1 border-[#E4E4E7] rounded-lg cursor-pointer w-fit py-3 px-5 justify-between ">
          <p className="mr-2.5">Learn More About Our Technology</p>
          <Image src={rightArr} alt="img icon" />,
        </div>
      </div>
    </div>
  );
}
